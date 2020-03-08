import React from "react"
import img from "../images/grodinge.jpg"
function Grodinge() {
  return (
    <div className="container text-center justify-text text-white py-3 footer">
      <div className="row">
        <div className="col">
            <h1 className="pretty-text">Plats och lokal</h1>
            <p>Hela dagen, både vigsel och fest kommer äga rum på grödinge bygdegård</p>
            <img src={img} className="location-portrait" />
            <p>Lövlund 8, 147 91 Grödinge</p>
        </div>
      </div>
    </div>
  )
}

export default Grodinge
