import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../Layout/sidebar';
import Header from '../Layout/header';

function ShopProduct() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios.get('http://localhost/ashion_ci/crud/index_products.php').then(function (response) {
      setProducts(response.data.data);
    });
  }
  function getCategories() {
    axios.get('http://localhost/ashion_ci/crud/index_category.php').then(function (response) {
      setCategories(response.data.data);
    });
  }
  function getBrand() {
    axios.get('http://localhost/ashion_ci/crud/index_brand.php').then(function (response) {
      setBrands(response.data.data);
    });
  }
  const deleteUser = (id) => {
    axios.delete(`http://localhost/ashion_ci/crud/delete_product.php?id=${id}`).then(function (response) {
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
    axios.post('http://localhost/ashion_ci/crud/create_product.php', inputs).then(function (response) {
      console.log(response.data)
      getDatas();
      document.getElementById('modelbutton').click();
    });
  }
  const clearData = () => {
    getCategories();
    getBrand();
    setInputs(values => ({ ...values, "id": "", "discount": "", "price": "", "old_price": "", "specification": "", "name": "", "image": "", "short_description": "", "long_description": "", "tag": "", "brand_id": "", "category_id": "" }))
  }

  /* for update */

  function getSingleProduct(id) {
    document.getElementById('modelbutton').click();
    axios.get(`http://localhost/ashion_ci/crud/single_product.php?id=${id}`).then(function (response) {
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
          <div className="row">
            <div className="db-row">
              <h2 className="fs-2 mb-3 d-h3">Shop Product List</h2>
              <button onClick={clearData} id="modelbutton" type="button" className="btn btn-info form-control mb-2 " data-toggle="modal" data-target="#myModal">
                <span className='fw-bold'> Add New Product</span>
              </button>
           </div>
            <div className="col">
              <table className="table bg-white rounded shadow-lg table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
                    products.map((d, key) =>
                      <tr key={key}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.cname}</td>
                        <td>{d.bname}</td>
                        <td>{d.price}</td>
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
                          <div className="col-sm-3">
                            <div className="mb-3">
                              <label className="form-label">Category</label>
                              <select className="form-control" name="category_id" onChange={handleChange}>
                                <option value="" key="">Select Category</option>
                                {categories.map((d, key) =>
                                  <option selected={d.id == inputs.category_id} value={d.id} key={key}>{d.name}</option>
                                )}
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-3">
                            <div className="mb-3">
                              <label className="form-label">Brand</label>
                              <select className="form-control" name="brand_id" onChange={handleChange}>
                                <option value="" key="">Select Brand</option>
                                {brands.map((d, key) =>
                                  <option selected={d.id == inputs.brand_id} value={d.id} key={key}>{d.name}</option>
                                )}
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Short Description</label>
                              <textarea className="form-control" name="short_description" onChange={handleChange} value={inputs.short_description}></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Long Description</label>
                              <textarea className="form-control" name="long_description" onChange={handleChange} value={inputs.long_description} ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="mb-3">
                              <label className="form-label">Specification</label>
                              <textarea className="form-control" name="specification" onChange={handleChange} value={inputs.specification} ></textarea>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="mb-3">
                              <label className="form-label">Price</label>
                              <input type="number" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="mb-3">
                              <label className="form-label">Discount (%)</label>
                              <input type="text" className="form-control" name="discount" value={inputs.discount} onChange={handleChange} />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="mb-3">
                              <label className="form-label">Image</label>
                              <input type="file" className="form-control" name="image" onChange={onFileChange} />
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








    // <div className='dashboard-body' id="dashboard-wrapper">
    //   <Sidebar />
    //   <div id="d-main" >
    //     <div className="row">
    //       <div className="col-12">
    //         <h1 className="text-white fw-bold"><small>Product Lists</small></h1>
    //         <div className="row">
    //           <div className="col-12 py-2">
    //             <button onClick={clearData} id="modelbutton" type="button" className="btn btn-info   form-control" data-toggle="modal" data-target="#myModal">
    //               <span className='fw-bold'> Add New Product</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-12">
    //         <table className="table table-hover d-table">
    //           <thead>
    //             <tr>
    //               <th>#</th>
    //               <th>Name</th>
    //               <th>Category</th>
    //               <th>Brand</th>
    //               <th>Price</th>
    //               <th>Image</th>
    //               <th>Actions</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {products.length > 0 ? (
    //               products.map((d, key) =>
    //                 <tr key={key}>
    //                   <td>{d.id}</td>
    //                   <td>{d.name}</td>
    //                   <td>{d.cname}</td>
    //                   <td>{d.bname}</td>
    //                   <td>{d.price}</td>
    //                   <td><img src={d.image} alt="" width={50} /></td>
    //                   <td>
    //                     <button className="btn btn-primary me-2" onClick={() => getSingleProduct(d.id)}>Edit</button>
    //                     <button className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</button>
    //                   </td>
    //                 </tr>
    //               )
    //             ) : (
    //               <p>No Products available</p>
    //             )}
    //           </tbody>
    //         </table>


    //         <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //           <div className="modal-dialog modal-lg" role="document">
    //             <div className="modal-content">
    //               <div className="modal-header">
    //                 <h4 className="modal-title" id="exampleModalLabel">Product Data</h4>
    //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //                   <span aria-hidden="true">&times;</span>
    //                 </button>
    //               </div>
    //               <div className="modal-body">
    //                 <form onSubmit={handleSubmit}>
    //                   <div className="row">
    //                     <div className="col-sm-6">
    //                       <div className="mb-3">
    //                         <label className="form-label">Name</label>
    //                         <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
    //                         <input value={inputs.id} type="hidden" name="id" />
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-3">
    //                       <div className="mb-3">
    //                         <label className="form-label">Category</label>
    //                         <select className="form-control" name="category_id" onChange={handleChange}>
    //                           <option value="" key="">Select Category</option>
    //                           {categories.map((d, key) =>
    //                             <option selected={d.id == inputs.category_id} value={d.id} key={key}>{d.name}</option>
    //                           )}
    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-3">
    //                       <div className="mb-3">
    //                         <label className="form-label">Brand</label>
    //                         <select className="form-control" name="brand_id" onChange={handleChange}>
    //                           <option value="" key="">Select Brand</option>
    //                           {brands.map((d, key) =>
    //                             <option selected={d.id == inputs.brand_id} value={d.id} key={key}>{d.name}</option>
    //                           )}
    //                         </select>
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-12">
    //                       <div className="mb-3">
    //                         <label className="form-label">Short Description</label>
    //                         <textarea className="form-control" name="short_description" onChange={handleChange} value={inputs.short_description}></textarea>
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-12">
    //                       <div className="mb-3">
    //                         <label className="form-label">Long Description</label>
    //                         <textarea className="form-control" name="long_description" onChange={handleChange} value={inputs.long_description} ></textarea>
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-12">
    //                       <div className="mb-3">
    //                         <label className="form-label">Specification</label>
    //                         <textarea className="form-control" name="specification" onChange={handleChange} value={inputs.specification} ></textarea>
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-4">
    //                       <div className="mb-3">
    //                         <label className="form-label">Price</label>
    //                         <input type="number" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-4">
    //                       <div className="mb-3">
    //                         <label className="form-label">Discount (%)</label>
    //                         <input type="text" className="form-control" name="discount" value={inputs.discount} onChange={handleChange} />
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-4">
    //                       <div className="mb-3">
    //                         <label className="form-label">Image</label>
    //                         <input type="file" className="form-control" name="image" onChange={onFileChange} />
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-6">
    //                       <div className="mb-3">
    //                         <label className="form-label">Old Price</label>
    //                         <input type="text" className="form-control" name="old_price" value={inputs.old_price} onChange={handleChange} />
    //                       </div>
    //                     </div>
    //                     <div className="col-sm-6">
    //                       <div className="mb-3">
    //                         <label className="form-label">Tag/Label</label>
    //                         <input type="text" className="form-control" name="tag" value={inputs.tag} onChange={handleChange} />
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="row">
    //                     <div className="col-sm-3 offset-sm-3">
    //                       <button type="submit" className="btn btn-primary">Submit</button>
    //                     </div>
    //                     <div className="col-sm-3">
    //                       <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
    //                     </div>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default ShopProduct;