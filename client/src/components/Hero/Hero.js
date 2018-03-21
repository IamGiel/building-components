import React from "react";
import "./Hero.css";

const Hero = () => (
  <div>
    <img
      id="left"
      src={require("../../assets/images/boltsScrews.jpg")}
      alt="me"
    />
    <img
      id="right"
      src={require("../../assets/images/boltsScrews.jpg")}
      alt="me"
    />
    {/* <h1>test</h1> */}
  </div>
);

export default Hero;
