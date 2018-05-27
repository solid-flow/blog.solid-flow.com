import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import './blog-post.css';

import Bio from '../components/Bio';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const { previous, next } = this.props.pathContext;

    return (
      <div className="blog-post-container">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <hr className="my-2"/>
        <div className="d-flex justify-content-between my-2">
          <div className="h5">{post.frontmatter.tags.join(', ')}</div>
          <div className="h5">{post.frontmatter.date}</div>
        </div>
        <div className="blog-post-summary h5">{post.frontmatter.summary}</div>

        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio/>
        <div className="d-flex justify-content-between my-4">
          {previous && (

              <Link to={previous.fields.slug} rel="prev" className="previous-post-link">
                ← {previous.frontmatter.title}
              </Link>
          )}


          {next && (
              <Link to={next.fields.slug} rel="next" className="next-post-link">
                {next.frontmatter.title} →
              </Link>
          )}
        </div>
      </div>




    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        summary
      }
    }
  }
`
