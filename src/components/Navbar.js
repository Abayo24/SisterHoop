import React from "react";
import Logo from "../assets/sisterhoodLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="sisterhood logo"
            width="80"
            height="auto"
            class="d-inline-block"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse middle" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">Home </Link>
            </li>
            <li class="nav-item">
              <Link to="/games">Games </Link>
            </li>
            <li class="nav-item">
              <Link to="/players">Players </Link>
            </li>
            <li class="nav-item">
              <Link to="/blogs">Blogs </Link>
            </li>
              <li class="nav-item">
                <Link to="/signup">Sign Up </Link>
              </li>
              <li class="nav-item">
                <Link to="/login"> Login</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
