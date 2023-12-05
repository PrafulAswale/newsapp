import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="badge bg-light text-dark fs-4">News App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="home" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to="/favorite" className="nav-link">
              Favorites
            </Link>
            <Link to="signup" className="nav-link">
              Signup
            </Link>
            <Link to="signin" className="nav-link">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
