import React from "react"
import "../styles/Index.scss"
// import { Link } from "gatsby"

import Header from "../components/header"
import Intro from "../components/intro"
import RSVP from "../components/rsvp"
import Schema from "../components/schema"
import Info from "../components/info"
import Gifts from "../components/gifts"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div className="parallax">
    <div className="parallax__group">
      <div className="parallax__layer parallax__layer--base intro-container">
        <div className="container text-center justify-text text-white">
          <Header siteTitle={"Micke och Jossan"} />
          <Intro />
        </div>
      </div>
    </div>
    <div className="parallax__group">
      <div className="parallax__layer parallax__layer--back rsvp-background">
        back rsvp
      </div>
      <div className="parallax__layer parallax__layer--base rsvp-container">
        <RSVP />
      </div>
    </div>
    <div className="parallax__group">
      <div className="parallax__layer parallax__layer--back rsvp-background">
        back schema
      </div>
      <div className="parallax__layer parallax__layer--base rsvp-container">
        <Schema />
      </div>
    </div>
    <div className="parallax__group">
      <div className="parallax__layer parallax__layer--back rsvp-background">
        back info
      </div>
      <div className="parallax__layer parallax__layer--base rsvp-container">
        <Info />
      </div>
    </div>
    <div className="parallax__group">
      <div className="parallax__layer parallax__layer--back rsvp-background">
        back gifts
      </div>
      <div className="parallax__layer parallax__layer--base rsvp-container">
        <Gifts />
      </div>
    </div>
  </div>
)

export default IndexPage
