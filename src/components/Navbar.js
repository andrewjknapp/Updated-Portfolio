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
    )
}

export default Navbar;