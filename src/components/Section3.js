import React from "react";
import img from "../images/top-img.jpg";
import "./Section3.css";
import Fade from "react-reveal/Fade";

const Section3 = () => {
  return (
    <div className="career">
      <div className="back">
        <Fade bottom>
          <div className="img">
            <img src={img} alt="" className="img-top"></img>
          </div>
        </Fade>
        <div className="box2">
          <p className="careers">Careers At AUUM </p>
          <p className="careers-detail">Lets grow together.</p>
          <p className="careers-detail2">
            Join our team in Bhubaneswar to help reshape the world and make
            products that reach over millions of people worldwide.
          </p>
          <div className="buttons">
            <button>Learn More</button>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
