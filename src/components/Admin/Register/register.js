import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './register.css';
import { register } from "../Auth/auth";

function Register() {
  const [inputs, setInputs] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("Choose an image"); 
  const navigate = useNavigate();

  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    // fileReader.readAsDataURL(files[0]);
    // const file = e.target.files[0];


    fileReader.onload = (event) => {
      const name = "image";
      const value = event.target.result
      setInputs(values => ({ ...values, [name]: value }));
      setSelectedFileName(files[0].name);
    }

    if (files[0]) {
      fileReader.readAsDataURL(files[0]);
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(inputs);
    navigate('/signin');
  }
  return (
    <div>
      {/* <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <form className="reg-from" onSubmit={handleSubmit}>
            <div className="container reg-container">
              <label for="uname"><b>Name</b></label>
              <input className="reg-input" type="text" placeholder="Enter Full Name" name="name" onChange={handleChange} />

              <label for="uname"><b>Email</b></label>
              <input className="reg-input" type="text" placeholder="Enter Email Address" name="email" onChange={handleChange} required />

              <label for="psw"><b>Password</b></label>
              <input className="reg-input" type="password" placeholder="Enter Password" name="password" onChange={handleChange} required />

              <label for="psw"><b>Image</b></label>
              <input type="file" className="form-control reg-input" name="image" onChange={onFileChange} />

              <button className="reg-btn" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div> */}

      <div className="reg-wrapper">
        <div className="logo">
          <span className="fa fa-user custom-icon"></span>
        </div>
        <div className="text-center mt-4 name"><img src="img/logo.png" alt="" /></div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-pencil"></span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
            />
          </div>
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
          <label htmlFor="image" className="form-field d-flex align-items-center">
            <span className="fa fa-image"></span>
            <span className="img-file">{selectedFileName}</span>
            <input
              type="file"
              name="image"
              id="image"
              style={{ display: 'none' }}
              onChange={onFileChange}
            />
          </label>
          <button className="btn mt-3">Register</button>
        </form>
        <div className="text-center fs-6">
          Already have an account? <a href="./signin">Login</a> Now
        </div>
      </div>
    </div>
  );
}

export default Register;