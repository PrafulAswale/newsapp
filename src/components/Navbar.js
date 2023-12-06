import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  let id = auth.currentUser ? auth.currentUser.uid : "";
  async function signout() {
    try {
      await signOut(auth);
      toast.success("signout");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="badge bg-light text-dark fs-4">News App</span>
        </Link>
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
            <Link to="/" className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to={`/user/${id}/favorites`} className="nav-link">
              Favorites
            </Link>

            <button type="button" className="btn btn-primary" onClick={signout}>
              Signout
            </button>

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
