import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";


const avatarStyle ={
  backgroundImage: "url('../assets/images/boltsScrews.jpg')"
};


const About = () => (
  <div>
    <div style={avatarStyle} />
  </div>
);

export default About;
