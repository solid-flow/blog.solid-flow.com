import React from "react";
import Link from "gatsby-link";
import "./SideNavbar.css";

class SideNavbar extends React.Component {
  render() {
    return (
      <nav
        className="default-primary-color navbar navbar-dark col-md-2 d-none d-md-block"
        id="sticky-outer-nav"
      >
        <div className="d-flex align-items-center inner-centered-div">
          <ul className="navbar-nav mx-3 w-100">
            <li className="nav-item">
              <Link
                exact
                to="/"
                className="nav-link px-3"
                activeClassName="nav-link-active"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tags"
                className="nav-link px-3"
                activeClassName="nav-link-active"
              >
                Tags
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
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

export default SideNavbar;
