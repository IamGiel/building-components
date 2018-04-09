import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  return <nav className="navbar navbar-default">
      <div className="container-fluid veryTop">
        <div className="navbar-header myName">
          <Link className="navbar-brand " to="/" />
        </div>

        {/* navbar dropdown */}

        {/* <!-- Dropdown Trigger --> */}
        <div className="buttonContainer">
          <a className="dropdown-button btn dropdown" href="javascript:void(0);" data-activates="demoDropdown">
            Explore
          </a>

          {/* <!-- Dropdown Structure --> */}
          <ul id="demoDropdown" className="dropdown-content">
            <li>
              <a href="https://iamgiel.github.io/star-wars/#" className="listItems">
                {/* <Link to="/">About</Link> */}star wars
              </a>
            </li>
            <li>
              <a href=" https://iamgiel.github.io/GifTastic/" className="listItems">
                {/* <Link to="/discover">Discover</Link> */}Gif ur Emotion
              </a>
            </li>
            <li>
              <a href="https://morning-taiga-52141.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">Discover</Link> */}News Scraper
              </a>
            </li>

            <li>
              <a href="https://the-reading-exchange.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">Discover</Link> */}Exchanges
              </a>
            </li>
            <li>
              <a href="https://fh-v2.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">RESTful API</Link> */}Fh-V2
              </a>
            </li>
            <li>
              <a href="https://fast-depths-29670.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">RESTful API</Link> */}Reading List
              </a>
            </li>
            <li>
              <a href="https://immense-tor-91031.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">RESTful API</Link> */}Friend-Finder
              </a>
            </li>
            <li>
              <a href="https://powerful-depths-25126.herokuapp.com/" className="listItems">
                {/* <Link to="/discover">RESTful API</Link> */}Famous Burgers
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="dropdown">
          <a className="btn btn-secondary dropdow-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        </div> */}
      </div>
      <span className="spanExtra" />
    </nav>;
};

export default Navbar;
