import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return <nav className="navbar navbar-default">
      <div className="container-fluid veryTop">
        <div className="navbar-header myName">
          <Link className="navbar-brand " to="/">
            <div className="gels">Home</div>
          </Link>
        </div>

        {/* navbar dropdown */}

        <div className="dropdown show">
          <a className="btn btn-secondary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            explore
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item listItems" href="">
              <Link to="/">About</Link>
            </a>
            <a className="dropdown-item listItems" href="">
              <Link to="/discover">Discover</Link>
            </a>
            <a className="dropdown-item listItems" href="">
              <a href="https://salty-everglades-65888.herokuapp.com/">
                Rainy
              </a>
            </a>
            <a className="dropdown-item listItems" href="">
              <Link to="/discover">RESTful API</Link>
            </a>
          </div>
        </div>

        {/* <ul className="nav navbar-nav">
          <li
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "active"
                : ""
            }
          >
            <Link to="/">About</Link>
          </li>
          <li
            className={window.location.pathname === "/discover" ? "active" : ""}
          >
            <Link to="/discover">Discover</Link>
          </li>


          <li
            className={window.location.pathname === "/search" ? "active" : ""}
          >
            <Link to="/search">Search</Link>
          </li>


        </ul> */}
      </div>
      <span className="spanExtra" />
    </nav>;
};

export default Navbar;
