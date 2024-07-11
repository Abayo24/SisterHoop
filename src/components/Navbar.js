import React, { useState } from "react";
import Logo from "../assets/sisterhoodLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isAuthenticated }) {
  // Example state to manage notifications count
  const [notificationsCount, setNotificationsCount] = useState(3);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={Logo}
            alt="sisterhood logo"
            width="80"
            height="auto"
            className="d-inline-block"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/games" className="nav-link">
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/players" className="nav-link">
                Players
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Blogs
              </Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/notifications" className="nav-link">
                  <i className="bi bi-bell"></i>{" "}
                  <span className="badge bg-danger">{notificationsCount}</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  <i className="bi bi-person-circle"></i> Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  <i className="bi bi-box-arrow-right"></i> Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
