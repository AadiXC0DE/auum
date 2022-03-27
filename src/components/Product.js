import React from "react";
import img from "../images/product.PNG";
import "./Product.css";
import Fade from "react-reveal/Fade";

const Product = () => {
  return (
    <div className="product-back">
      <div className="back">
        <div className="box3">
          <p className="prod">Swasner PPE</p>
          <p className="product-detail">
            End of sweating with modern ventilated PPE
          </p>
          <div className="buttons">
            <button>Learn More</button>
            <button>BUY NOW</button>
          </div>
        </div>
        <Fade bottom>
          <div className="img">
            <img src={img} alt="" className="product"></img>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Product;
