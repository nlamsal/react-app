import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { history } from "./../../helper/history";

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
              <a onClick={logout}>Logout</a>
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

const logout = () => {
  localStorage.clear();
  history.push("/");
};

export default Navbar;
