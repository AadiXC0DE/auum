import React from "react";
import Fade from "react-reveal/Fade";
import "./Section2.css";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img5 from "../images/img5.jpg";

const Section2 = () => {
  return (
    <div className="background">
      <div className="box1">
        <Fade bottom>
          <p className="text1-heading">About Us</p>
          <p className="text1">
            We are a startup working out of Bhubaneswar, focused on creating
            promising and new applications of emerging technologies for
            consumers and enterprise. We are recognised by “Startup India”
            initiative, DPIIT and are incubated by Atal Incubation Centre
            Nalanda.
          </p>
        </Fade>
      </div>

      <div className="images">
        <img className="image" src={img2} alt=""></img>
        <img className="image" src={img3} alt=""></img>
        <img className="image" src={img5} alt=""></img>
      </div>
      <p className="product">Browse through our varied range of products</p>
    </div>
  );
};

export default Section2;
