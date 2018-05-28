import React from 'react';
import { withPrefix } from 'gatsby-link'
import Link from 'gatsby-link'

class About extends React.Component {

  render() {
    return(
      <div>
        <p>
        Hi! I am Iuliia, welcome to my blog.
        </p>
        <p>
          Here I am writing about things I learn, activities I enjoy,
          topics that seem important in my day to day life as a fullstack
          developer. Expect to read about Angular, React and Node.js since
          that is my preferred stack at the moment.
        </p>
        <p>
          In my free time, I like to be involved in projects to bring
          more women in tech and make IT community more diverse and welcoming to all people.
        </p>
        <p>
          You can connect with me on <a href="https://twitter.com/solid_flow_com">Twitter</a>,
          visit my <a href='https://solid-flow.com'>portfolio website</a> or download
          my <Link href={withPrefix('/CV_Ichin-Norbu.pdf')}>CV</Link>.
        </p>
      </div>
    );
  }
}

export default About;