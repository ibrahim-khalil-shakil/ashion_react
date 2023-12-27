import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../Layout/sidebar';
import Header from '../Layout/header';

function HomeProduct() {
  const [products_home, setProducts] = useState([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios.get('http://localhost/ashion_ci/crud_home/index_products.php').then(function (response) {
      setProducts(response.data.data);
    });
  }
  const deleteUser = (id) => {
    axios.delete(`http://localhost/ashion_ci/crud_home/delete_product.php?id=${id}`).then(function (response) {
      getDatas();
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      const name = "image";
      const value = event.target.result
      setInputs(values => ({ ...values, [name]: value }));
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost/ashion_ci/crud_home/create_product.php', inputs).then(function (response) {
      console.log(response.data)
      getDatas();
      document.getElementById('modelbutton').click();
    });
  }
  const clearData = () => {
    setInputs(values => ({ ...values, "id": "", "price": "", "old_price": "", "name": "", "image": "", "tag": "" }))
  }

  /* for update */

  function getSingleProduct(id) {
    document.getElementById('modelbutton').click();
    axios.get(`http://localhost/ashion_ci/crud_home/single_product.php?id=${id}`).then(function (response) {
      setInputs(response.data);
      setInputs(values => ({ ...values, "image": "" }))
    });
  }

  return (
    <div className="d-flex" id="dashboard-wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Header />


        <div className="container-fluid px-4">
          <div className="row ">
            <h2 className="fs-2 mb-3 d-h3">Home Product List</h2>
            <button onClick={clearData} id="modelbutton" type="button" className="btn btn-info form-control mb-2" data-toggle="modal" data-target="#myModal">
              <span className='fw-bold'> Add New Product</span>
            </button>
                <div className="col">
              <table className="table bg-white rounded shadow-lg table-hover">
                    <thead>
                      <tr>
                        <th scope="col" width="50">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Old Price</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Image</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products_home.length > 0 ? (
                        products_home.map((d, key) =>
                          <tr key={key}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                            <td>{d.old_price}</td>
                            <td>{d.tag}</td>
                            <td><img src={d.image} alt="" width={50} /></td>
                            <td>
                              <button className="btn btn-primary me-2" onClick={() => getSingleProduct(d.id)}>Edit</button>
                              <button className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</button>
                            </td>
                          </tr>
                        )
                      ) : (
                        <p>No Products available</p>
                      )}
                    </tbody>
                  </table>


                  <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="exampleModalLabel">Product Data</h4>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label">Name</label>
                                  <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
                                  <input value={inputs.id} type="hidden" name="id" />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label">Price</label>
                                  <input type="number" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label">Old Price</label>
                                  <input type="text" className="form-control" name="old_price" value={inputs.old_price} onChange={handleChange} />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label">Tag/Label</label>
                                  <input type="text" className="form-control" name="tag" value={inputs.tag} onChange={handleChange} />
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="mb-3">
                                  <label className="form-label">Image</label>
                                  <input type="file" className="form-control" name="image" onChange={onFileChange} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-3 offset-sm-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                              </div>
                              <div className="col-sm-3">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      );
}

      export default HomeProduct;