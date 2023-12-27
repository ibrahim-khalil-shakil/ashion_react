import React from "react";
import './layout.css';
import { logout } from "../../Admin/Auth/auth";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();


  const signout = () => {
    logout();
    navigate("/");
  }

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div className="bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <a href='./'><img src="img/logo.png"></img></a>
        </div>
        <div className="list-group my-3">
          <a href="./dashboard" className="list-group-item list-group-item-action bg-transparent second-text active">
            <i class="fa fa-tachometer me-2" aria-hidden="true"></i>Dashboard
          </a>
          <a href="./" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-home me-2"></i>Home
          </a>
          <a href="./shopProducts" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-gift me-2"></i>Shop Products
          </a>
          <a href="./productHome" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-shopping-bag icons me-2"></i>Home Products
          </a>
          <a href="./messageList" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-envelope me-2"></i>Message List
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-pie-chart me-2"></i>Analytics
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-file-text me-2"></i>Reports
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-shopping-cart me-2"></i>Store Mng
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-bar-chart me-2"></i>Projects
          </a>
          <a href="./coupon" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-commenting me-2"></i>Coupon
          </a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
            <i className="fa fa-map-marker me-2"></i>Outlet
          </a>
          <a href="#" onClick={signout} className="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
            <i className="fa fa-power-off me-2"></i>Logout
          </a>
        </div>
      </div>
      {/* <!-- /#sidebar-wrapper --> */}

      
    </>
  );
}

export default Sidebar;




{/* <div id="mySidenav" className="sidenav">
  <div href="#" className="text-white p-3">
    <img src={`http://localhost/ashion_ci/auth/${userLogged.image}`} alt="" className='d-u-img mx-1' />
    {userLogged.name}
  </div>
  <a href="./dashboard" className="icon-a">
    <i className="fa fa-dashboard icons"></i> Dashboard
  </a>
  <a href="./" className="icon-a">
    <i className="fa fa-home icons"></i> Home
  </a>
  <a href="./shopProducts" className="icon-a">
    <i className="fa fa-shopping-bag icons"></i> Shop Products
  </a>
  <a href="./messageList" className="icon-a">
    <i className="fa fa-envelope icons"></i> Message List
  </a>
  <a href="./productHome" className="icon-a">
    <i className="fa fa-tasks icons"></i> Home Product
  </a>
  <a href="#" className="icon-a">
    <i className="fa fa-user icons"></i> Accounts
  </a>
  <a href="#" className="icon-a">
    <i className="fa fa-list-alt icons"></i> Tasks
  </a>
</div> */}