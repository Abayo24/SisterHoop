import React, { useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Validation from './LoginValidation';
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Check if there are no errors
    if (Object.keys(validationErrors).length === 0) {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === 'Success') {
            navigate('/member');
          } else {
            alert('This user does not exist');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="login-container">
      <div className="justify-content-center">
        <form action="" onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className="mb-2">
            <label htmlFor="email"></label>
            <input type="email"
              placeholder="Enter Email"
              id="email"
              onChange={handleInput}
              className="form-control"
              name="email" />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={handleInput}
              className="form-control"
              name="password"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button className="btn btn-dark" type="submit">
            Login
          </button>
          <div className="input-group mb-3">
            <input
              className="check me-3"
              type="checkbox"
              value="checked"
            />
            <p>Remember Me</p>
          </div>

          <Link to='/signup' className="btn btn-outline-dark w-100" type="button">Create Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;