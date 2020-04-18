import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/Navbar.css";

function Navbar() {

    return (
        <nav className="navbar">
          <Link to="/" className="brand link">Andrew Knapp</Link>
          {/* <div className="" id="navbarNav"> */}
            <ul className="navbarList">
              <li className="nav-li">
              <Link to="/" className="link">About</Link>
              </li>
              <li className="nav-li">
                <Link to="/portfolio" className="link">Portfolio</Link>
              </li>
              <li className="nav-li">
                <Link to="/contact" className="link">Contact</Link>
              </li>
            </ul>
          {/* </div> */}
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-dark">
        //   <Link to="/" className="brand link">Andrew Knapp</Link>
        //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        //   </button>
        //   <div className="collapse navbar-collapse" id="navbarNav">
        //     <ul className="navbar-nav navbarList">
        //       <li className="nav-item active nav-li">
        //         <Link to="/" className="link">About</Link>
        //       </li>
        //       <li className="nav-item nav-li">
        //         <Link to="/portfolio" className="link">Portfolio</Link>
        //       </li>
        //       <li className="nav-item nav-li">
        //         <Link to="/contact" className="link">Contact</Link>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
    )
}

export default Navbar;