import React from "react"
import img from "../images/Portraits/002_square.jpg"

function Footer() {
  return (
    <div className="container text-center justify-text text-white py-3 footer">
      <div className="row">
        <div className="col">
          <div>
            <img src={img} className="pair-portrait" />
          </div>
          <div>#mickeochjossan2020</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
