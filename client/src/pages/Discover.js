import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

const About = () => (
  <div>
    <Hero
      backgroundImage="../../assets/images/particlesLights.mp4"
      className="background"
    >
      <h1>Welcome,</h1>
      {/* <h2>This is where I live... </h2> */}
    </Hero>
    {/* <Container style={{ marginTop: 30 }}>
      <Row>
       
      </Row>
    </Container> */}
  </div>
);

export default About;
