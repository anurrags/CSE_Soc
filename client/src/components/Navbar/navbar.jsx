import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
const user = localStorage.getItem("token");
const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo-title">CSE Society</h1>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/" className="hover">
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover">
              Events
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/alumni" className="hover">
              Alumni
            </Link>
          </li>

          {!user && (
            <li>
              <Link to="/login" className="hover">
                Login
              </Link>
            </li>
          )}

          {user && (
            <li>
              <button className="logout_btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default navbar;
