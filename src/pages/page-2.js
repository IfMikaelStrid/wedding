import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="OSA Micke Och Jossans bröllop" />
    <div className="intro-container">
      <div className="container text-center justify-text text-white">
        <Header siteTitle={"Micke och Jossan: OSA"} />
      </div>
    </div>

      <div className="d-flex">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScHega_f6hXOjYgBGL-nGK-lkJEh_loJzKbJayCH1OqytBgzw/viewform?embedded=true"
          width="100%"
          height="900px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

    <Link to="/">Tillbaka</Link>
  </>
)

export default SecondPage
