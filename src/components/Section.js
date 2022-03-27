import React from "react";
import Fade from "react-reveal/Fade";
import "./Section.css";

const Section = () => {
  return (
    <div className="wrap">
      <Fade bottom>
        <h1 className="heading">AUUM</h1>
        <h2 className="sub-heading">Innovation Starts with Us</h2>
      </Fade>
    </div>
  );
};

export default Section;
