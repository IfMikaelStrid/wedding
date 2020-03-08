import React from "react"
import "../styles/Index.scss"
import { Link } from "gatsby"
import { Parallax, Background } from "react-parallax"

import Header from "../components/header"
import Intro from "../components/intro"
import RSVP from "../components/rsvp"
import Schema from "../components/schema"
import Info from "../components/info"
import Gifts from "../components/gifts"
import DressCode from "../components/dresscode"
import Children from "../components/Children"
import Grodinge from "../components/grodinge"
import Footer from "../components/footer"

import img1 from "../images/grodinge1.jpg"
import img2 from "../images/grodinge2.jpg"
import img3 from "../images/grodinge3.jpg"
import SEO from "../components/seo"

const insideStyles = {
  color: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg"

const IndexPage = () => (
  <>
    <SEO title="Micke och Jossan Gifter sig" />
    {/* <Parallax bgImage={topimg} strength={200}>
    <div style={{ height: 1000 }}></div>
    </Parallax> */}
    <Parallax bgImage={img1} strength={200}>
      <div style={{ height: 700 }}>
        <div className="intro-container">
          <div className="container text-center justify-text text-white">
            <Header siteTitle={"Micke och Jossan"} />
            <Intro />
          </div>
        </div>
      </div>
    </Parallax>

    <Parallax
      bgImage={img2}
      strength={200}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(233, 195, 195, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500,
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div className="rsvp-container">
          <RSVP />
        </div>
        <div style={insideStyles}>
          <Link className="rsvp-link" to="/page-2">
            OSA
          </Link>
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 500 }}>
        <div className="schema-container">
          <Schema />
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={img3} strength={200}>
      <div style={{ height: 500 }}>
        <div className="rsvp-container">
          <Gifts />
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={image2} strength={200}>
      <div style={{ height: 1200 }}>
        <div className="schema-container">
          <Info />
        </div>
        <div className="dresscode-container">
          <DressCode />
        </div>
        <div className="schema-container">
          <Children />
        </div>
      </div>
    </Parallax>
    <Parallax bgImage={image1} strength={200}>
      <div style={{ height: 700 }}>
        <div className="location-container">
          <Grodinge />
        </div>
      </div>
    </Parallax>
    <Parallax>
      <div  style={{ height: 300 }} className="footer-container">
        <Footer />
      </div>
    </Parallax>
  </>
)

export default IndexPage
