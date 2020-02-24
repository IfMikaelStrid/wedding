/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <div className="parallax">
        <div className="parallax__group container-fluid text-justify">
          <div className="parallax__layer parallax__layer--back text-justify">Hello back</div>
          <div className="parallax__layer parallax__layer--base text-justify">Hello front</div>
        </div>
        <div className="parallax__group row">
          <div className="parallax__layer parallax__layer--back">Hello Back</div>
          <div className="parallax__layer parallax__layer--base">Hello base</div>
        </div>
      </div> */}
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
