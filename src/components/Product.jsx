import React from "react";
import { Link } from "react-router-dom";
import "../styles/product.css"
function Product({ info }) {
  return (
    <Link to={`/product/${info._id
      }`} className="product">
      <div className="product-container">
        <div className="product-img">
          <img src={info.images[0].url} alt=""/>
        </div>
        <div className="product-details">
          <div className="name">{
           
           info.name&&info.name.slice(0,60)
          
          }</div>

          <div className="price">Price: {info.price}₹</div>
        </div>
      </div>
    </Link>
  );
} ``

export default Product;
