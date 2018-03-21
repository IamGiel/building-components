import React from "react";
import "./Container";

const Container = props => (
  <div
    className={`container${props.fluid ? "-fluid" : ""}`}
    {...props}
  >
  <div className="left"></div>
  </div>
);

export default Container;
