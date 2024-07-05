import React, {useState} from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";

function Signup() {
    const [values, setValues] = useState({
        name: '',
        phoneNo: '',
        email: '',
        password:''
      })
    
      const [errors, setErrors] = useState({})
      const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
      }

  return (
    <div className="login-container">
      <div className="justify-content-center">
        <form action="" onSubmit={handleSubmit} className="mt-5">
          <h1>Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="text"></label>
              <input type="text" placeholder="Enter Full Name" id="text" name="name" onChange={handleInput} />
              {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="Number"></label>
              <input type="Number" placeholder="Enter Phone Number" id="text" name="phoneNo" onChange={handleInput} />
              {errors.phoneNo && <span className="text-danger">{errors.phoneNo}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email"></label>
              <input type="email" placeholder="Enter Email" id="email" name="email" onChange={handleInput}/>
              {errors.email && <span className="text-danger">{errors.email}</span>}        
          </div>
          <div className="mb-3">
            <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Enter Password"
                id="password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}          
          </div>
          <div class="input-group mb-3">
              <input
                class="check me-3"
                type="checkbox"
                value="checked"
              /> 
              <p>agree to terms and conditions</p>
          </div>
          <button  className="btn btn-dark" type="submit">
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
