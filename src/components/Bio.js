import React from 'react'

import profilePic from './profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div className="row my-4">
        <div className="col-sm-1 col-md-2">
          <img
            src={profilePic}
            alt={`Iuliia Ichin-Norbu`}
            className="img-fluid rounded-circle"
            style={{width: '100px'}}
          />
        </div>
        <div className="col-sm-11 col-md-10">
          <h3>Iuliia Ichin-Norbu // <a href="https://solid-flow.com">solid-flow.com</a></h3>
          <p>Software Developer: Angular, React, NodeJS // open-source, web, mobile // women in tech</p>

          <p>
            Follow me on <a href="https://twitter.com/solid_flow_com">Twitter</a>!
          </p>
        </div>
      </div>
    )
  }
}

export default Bio
