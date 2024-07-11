import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    phoneNo: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Check if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/signup', values, { headers: { 'Content-Type': 'application/json' } })
        .then(res => {
          console.log(res.data);
          navigate('/login');
        })
        .catch(err => {
          console.log(err);
        });
    }
    console.log("Hello");
  };

  return (
    <div className="login-container">
      <div className="justify-content-center">
        <form action="" onSubmit={handleSubmit} className="mt-5">
          <h1>Sign Up</h1>
          <div className="mb-2">
            <label htmlFor="name"></label>
            <input className="form-control" type="text" placeholder="Enter Full Name" id="name" name="name" onChange={handleInput} />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNo"></label>
            <input type="Number" className="form-control" placeholder="Enter Phone Number" id="phoneNo" name="phoneNo" onChange={handleInput} />
            {errors.phoneNo && <span className="text-danger">{errors.phoneNo}</span>}
          </div>
          <div className="mb-2">
            <label htmlFor="email"></label>
            <input type="email" className="form-control" placeholder="Enter Email" id="email" name="email" onChange={handleInput} />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-2">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              id="password"
              name="password"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <div className="input-group mb-3">
            <input
              className="check me-3"
              type="checkbox"
              value="checked"
            />
            <p>agree to terms and conditions</p>
          </div>
          <button className="btn btn-dark" type="submit">
            Sign Up
          </button>
          <Link to='/login' className="btn btn-outline-dark w-100" type="button">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
