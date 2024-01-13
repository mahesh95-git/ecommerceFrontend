import React from "react";
import { Link } from "react-router-dom";
function Product({ info }) {
  return (
    <Link to={`productDetial/${info.name}`}>
      <div className="product-container">
        <div className="product-img">
          <img src={info.img} alt="" />
        </div>
        <div className="product-details">
          <div className="name">{info.name}</div>

          <div className="price">Price:{info.price}</div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
