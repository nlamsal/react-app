import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              My Articles Portal
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/list">Home</NavLink>
            </li>
            <li>
              <NavLink to="/new">New Article</NavLink>
            </li>

            <li className="logout">
              <a href="/login">Logout</a>
            </li>
            {/* <li>
              <NavLink to="/list">View Articles</NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
