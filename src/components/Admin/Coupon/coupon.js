import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../Layout/sidebar';
import Header from '../Layout/header';

function Coupon() {
    const [couponData, setCouponData] = useState([]);
    const [inputs, setInputs] = useState({
        code: '',
        discount_percentage: 0,
        expires_at: '',
    });

    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get('http://localhost/ashion_ci/crud_coupon/index_coupon.php').then(function (response) {
            setCouponData(response.data.data);
        });
    }
    const deleteItem = (id) => {
        axios.delete(`http://localhost/ashion_ci/crud_coupon/delete_coupon.php?id=${id}`).then(function () {
            getDatas();
        });
    }
    const clearData = () => {
        setInputs(values => ({ ...values, "id": "", "code": "", "discount_percentage": "", "expires_at": "" }))
    }

    /* for update */

    function getCouponData(id) {
        document.getElementById('modelbutton').click();
        axios.get(`http://localhost/ashion_ci/crud_coupon/single_coupon.php?id=${id}`).then(function (response) {
            setInputs(response.data);
            setInputs(values => ({ ...values, }))
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/ashion_ci/crud_coupon/create_coupon.php', inputs).then(function (response) {
            console.log(response.data)
            getDatas();
            document.getElementById('modelbutton').click();
        });
    }

    return (
        <div className="d-flex" id="dashboard-wrapper">
            <Sidebar />
            <div id="page-content-wrapper">
                <Header />


                <div className="container-fluid px-4">
                    <div className="row ">
                        <h2 className="fs-2 mb-3 d-h3">Coupon Code List</h2>
                        <button onClick={clearData} id="modelbutton" type="button" className="btn btn-info form-control mb-2" data-toggle="modal" data-target="#myModal">
                            <span className='fw-bold'> Add New Coupon Code</span>
                        </button>
                        <div className="col">
                            <table className="table bg-white rounded shadow-lg table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">#</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Discount Percentage</th>
                                        <th scope="col">Expires At</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {couponData.length > 0 ? (
                                        couponData.map((d, key) =>
                                            <tr key={key}>
                                                <td>{d.id}</td>
                                                <td>{d.code}</td>
                                                <td>{d.discount_percentage}</td>
                                                <td>{d.expires_at}</td>
                                                <td>
                                                    <button className="btn btn-primary me-2" onClick={() => getCouponData(d.id)}>Edit</button>
                                                    <button className="btn btn-danger btn-xs" onClick={() => deleteItem(d.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    ) : (
                                        <p>No Coupons available</p>
                                    )}
                                </tbody>
                            </table>


                            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title" id="exampleModalLabel">Coupon Data</h4>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Coupon Code</label>
                                                            <input value={inputs.code} type="text" className="form-control" name="code" onChange={handleChange} />
                                                            <input value={inputs.id} type="hidden" name="id" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Discount Precentage</label>
                                                            <input type="text" className="form-control" name="discount_percentage" value={inputs.discount_percentage} onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Expires At</label>
                                                            <input type="date" className="form-control" name="expires_at" value={inputs.expires_at} onChange={handleChange} />
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

export default Coupon;