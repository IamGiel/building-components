
import React from "react";

const bgPhoto = "../../assets/images/boltsScrews.jpg";

const Image = props => (
  // <div className={`row${props.fluid ? "-fluid" : ""}`} {...props}>
    <image src={bgPhoto} alt="" />
  // </div>
);

export default Image;


import React from "react";
import "./Hero.css";

const Hero = props =>
  <div
    className=""
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
  </div>;

export default Hero;