import React from 'react';
import Link from 'gatsby-link';
import _ from "lodash";

class Tags extends React.Component {

  render() {
    const {tags} = this.props;
    console.log(this.props);
    console.log(tags);
    return(
      <div className="h5">
        {tags &&
        tags.map((tag, index) => {
          if (index !== 0) {
            return (
              <span> //
                <Link
                  key={tag}
                  to={`/tags/${_.kebabCase(tag)}`}
                > {tag}
            </Link>
              </span>
            );
          }


          return(<Link
            key={tag}
            to={`/tags/${_.kebabCase(tag)}`}
          > {tag}
          </Link>);}



        )}
      </div>
    );
  }
}

export default Tags;