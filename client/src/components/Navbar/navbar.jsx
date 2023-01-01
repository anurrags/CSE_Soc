import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const user = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h1>CSE Society</h1>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
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
                Team
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
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
