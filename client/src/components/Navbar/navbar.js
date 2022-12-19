import React from "react";
import "./navbar.css";
const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
const navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>CSE Society</p>
      </div>
      <div className="list">
        <ul>
          <li>
            <a href="/home" className="active">
              Home
            </a>
          </li>
          {/* <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/registration">Registration</a>
          </li> */}
          <li>
            <button className="logout_btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
