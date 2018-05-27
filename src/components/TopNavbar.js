import React from 'react';
import Link from "gatsby-link";
import './TopNavbar.css';

class TopNavbar extends React.Component {

  render() {
    return(
      <nav className="default-primary-color navbar navbar-dark col-md-2 d-md-none">
        <input type="checkbox" id="topnavbar-control" />
        <label
          htmlFor="topnavbar-control"
          className="navbar-toggler hidden-md-up topnavbar-control-label"
          aria-controls="collapsable-navbar">
          <span className="navbar-toggler-icon topnavbar-control-icon" />
        </label>
        <div className="collapse navbar navbar-collapse topnavbar-menu-container">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link px-3"
                activeClassName="nav-link-active"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tags/"
                className="nav-link px-3"
                activeClassName="nav-link-active"
              >
                Tags
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about/"
                className="nav-link px-3"
                activeClassName="nav-link-active"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

}

export default TopNavbar;