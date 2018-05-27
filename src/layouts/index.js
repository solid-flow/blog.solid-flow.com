import React from 'react'
import Link from 'gatsby-link'

import SideNavbar from '../components/SideNavbar';
import TopNavbar from '../components/TopNavbar';

// here is it important to load index.css after bootstrap,
// otherwise it will not override bootstrap's defaults
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === '/') {
      header = (
        <h1 className="text-center font-weight-bold">
            Solid Flow Blog
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link to={'/'}>
            Solid Flow Blog
          </Link>
        </h3>
      )
    }
    return (
      <div className="">
        <div className="row">
          <TopNavbar />
          <SideNavbar />
          <div className="col-md-9 col-lg-10 ml-sm-auto">
            <div className="main-container">
              {header}
              {children()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
