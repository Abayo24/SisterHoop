import React, { useState } from "react";
import Logo from "../assets/sisterhoodLogo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();
  const [notificationsCount] = useState(3);

  const handleLogout = () => {
    onLogout();
    navigate("SisterHoop/login");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link to="/SisterHoop" className="navbar-brand">
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
          {isAuthenticated ? (
            <>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/SisterHoop" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/SisterHoop/games" className="nav-link">
                    Games
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/SisterHoop/players" className="nav-link">
                    Players
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/SisterHoop/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/notifications" className="nav-link">
                    <i className="bi bi-bell"></i>{" "}
                    <span className="badge bg-danger">
                      {notificationsCount}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <i className="bi bi-person-circle"></i> Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/SisterHoop" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#developer" className="nav-link">
                    Developer
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/SisterHoop/login" className="nav-link">
                    Get Started
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;