import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css';
import { login } from "../Auth/auth";

function Signin() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let check = await login(inputs);
    if (check)
      navigate('/');
    else
      alert("Sorry! Your email address or password is not correct.");
  }
  return (
    <div>
      <div className="login-wrapper">
        <div className="logo">
          <span className="fa fa-user custom-icon"></span>
        </div>
        <div className="text-center mt-4 name"><img src="img/logo.png" alt="" /></div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-envelope"></span>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
          Don't have an account? <a href="./register">Register</a> Now
        </div>
      </div>
    </div>
  );
} 

export default Signin;