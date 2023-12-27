import React from 'react';
import Sidebar from '../Layout/sidebar';
import Header from '../Layout/header';

function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return (
        <div className="d-flex" id="dashboard-wrapper">
            <Sidebar />
            <div id="page-content-wrapper">

                <Header/>

                <div className="container-fluid px-4">
                    <div className="row my-2">
                        <div className="col-md-3  cm-3">
                            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 className="fs-2">720</h3>
                                    <p className="fs-5">Products</p>
                                </div>
                                <i className="fa fa-gift fs-1 primary-text border rounded-circle secondary-bg p-3 d-icon"></i>
                            </div>
                        </div>

                        <div className="col-md-3  cm-3">
                            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 className="fs-2">4920</h3>
                                    <p className="fs-5">Sales</p>
                                </div>
                                <i className="fa fa-money fs-1 primary-text border rounded-circle secondary-bg p-3 d-icon"></i>
                            </div>
                        </div>

                        <div className="col-md-3  cm-3">
                            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 className="fs-2">3899</h3>
                                    <p className="fs-5">Delivery</p>
                                </div>
                                <i className="fa fa-truck fs-1 primary-text border rounded-circle secondary-bg p-3 d-icon"></i>
                            </div>
                        </div>

                        <div className="col-md-3 cm-3">
                            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                <div>
                                    <h3 className="fs-2">%25</h3>
                                    <p className="fs-5">Increase</p>
                                </div>
                                <i className="fa fa-line-chart fs-1 primary-text border rounded-circle secondary-bg p-3 d-icon"></i>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <h3 className="fs-4 mb-3 d-h3">Recent Orders</h3>
                        <div className="col">
                            <table className="table bg-white rounded shadow-lg table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" width="50">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Television</td>
                                        <td>Jonny</td>
                                        <td>$1200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Laptop</td>
                                        <td>Kenny</td>
                                        <td>$750</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Cell Phone</td>
                                        <td>Jenny</td>
                                        <td>$600</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Fridge</td>
                                        <td>Killy</td>
                                        <td>$300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Books</td>
                                        <td>Filly</td>
                                        <td>$120</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Gold</td>
                                        <td>Bumbo</td>
                                        <td>$1800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Pen</td>
                                        <td>Bilbo</td>
                                        <td>$75</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>Notebook</td>
                                        <td>Frodo</td>
                                        <td>$36</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Dress</td>
                                        <td>Kimo</td>
                                        <td>$255</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>Paint</td>
                                        <td>Zico</td>
                                        <td>$434</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>Carpet</td>
                                        <td>Jeco</td>
                                        <td>$1236</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>Food</td>
                                        <td>Haso</td>
                                        <td>$422</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



{/* <div className='dashboard-body'>
    <Sidebar />
    <div id="main" >
        <div className="head">
            <div className="col-div-6">
                <span style={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} className="">☰ Dashboard</span>
            </div>

            <div className="col-div-6">
                <div className="profile pt-0 mt-0">
                    <div className="text-center pt-0 mt-0 name"><img src="img/logo.png" alt="" /></div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>

        <div className="clearfix"></div>
        <br />

        <div className="col-div-3">
            <div className="box">
                <p>67<br /><span>Customers</span></p>
                <i className="fa fa-users box-icon"></i>
            </div>
        </div>
        <div className="col-div-3">
            <div className="box">
                <p>88<br /><span>Projects</span></p>
                <i className="fa fa-list box-icon"></i>
            </div>
        </div>
        <div className="col-div-3">
            <div className="box">
                <p>99<br /><span>Orders</span></p>
                <i className="fa fa-shopping-bag box-icon"></i>
            </div>
        </div>
        <div className="col-div-3">
            <div className="box">
                <p>78<br /><span>Tasks</span></p>
                <i className="fa fa-tasks box-icon"></i>
            </div>
        </div>
        <div className="clearfix"></div>
        <br /><br />
        <div className="col-div-8">
            <div className="box-8">
                <div className="content-box">
                    <p>Top Selling Projects <span>Sell All</span></p>
                    <br />
                    <table className='d-table'>
                        <thead>
                            <tr>
                                <th className='d-th'>Company</th>
                                <th className='d-th'>Contact</th>
                                <th className='d-th'>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='d-td'>Alfreds Futterkiste</td>
                                <td className='d-td'>Maria Anders</td>
                                <td className='d-td'>Germany</td>
                            </tr>
                            <tr>
                                <td className='d-td'>Centro comercial Moctezuma</td>
                                <td className='d-td'>Francisco Chang</td>
                                <td className='d-td'>Mexico</td>
                            </tr>
                            <tr>
                                <td className='d-td'>Ernst Handel</td>
                                <td className='d-td'>Roland Mendel</td>
                                <td className='d-td'>Austria</td>
                            </tr>
                            <tr>
                                <td className='d-td'>Island Trading</td>
                                <td className='d-td'>Helen Bennett</td>
                                <td className='d-td'>UK</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="col-div-4">
            <div className="box-4">
                <div className="content-box">
                    <p>Total Sale <span>Sell All</span></p>

                    <div className="circle-wrap">
                        <div className="circle">
                            <div className="mask full">
                                <div className="fill"></div>
                            </div>
                            <div className="mask half">
                                <div className="fill"></div>
                            </div>
                            <div className="inside-circle">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="clearfix"></div>
    </div>

</div> */}