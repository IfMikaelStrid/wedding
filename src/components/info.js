import React from "react"
import martin from "../images/CarlMartin.jpg.png"
import gustaf from "../images/CarlGustaf.jpg"

function Info() {
  return (
    <div className="container text-center justify-text text-white">
      <h2 className="pt-4">Toastmasters</h2>
      <div className="row d-flex justify-content-center">
        <div className="col m-2">
          <img src={martin} className="toast-portrait" />
          <p>Farbror Carl Agnes</p>
        </div>
        <div className="col m-2">
        <img src={gustaf} className="toast-portrait" />
        <p>Farbror Carl Farbror</p>
        </div>
      </div>
      <p className="mb-0 pb-5">
        Tal, telegram eller spex? Kontakta{" "}
        <a href="mailto: abc@example.com">toastmasters</a>
      </p>
    </div>
  )
}

export default Info
