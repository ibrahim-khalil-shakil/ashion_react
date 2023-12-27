import React from 'react'
import './layout.css';

function Header() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
          <div className="d-flex align-items-center">
              <i className="fa fa-user-secret primary-text fs-4 me-3" id="menu-toggle"></i>
              <h3 className="fs-4 m-0">Dashboard</h3>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                          role="button" data-toggle="dropdown" aria-expanded="false">
                          <img src={`http://localhost/ashion_ci/auth/${userLogged.image}`} alt="" className="d-u-img mx-1 me-2" />{userLogged.name}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">Profile</a></li>
                          <li><a className="dropdown-item" href="#">Settings</a></li>
                          <li><a className="dropdown-item" href="#">Logout</a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </nav>
  )
}

export default Header