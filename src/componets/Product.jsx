import React from "react";
import { Link } from "react-router-dom";
function Product({ info }) {
  return (
    <Link to={`/product/${info.product_id
      }`}>
      <div className="product-container">
        <div className="product-img">
          <img src={info.product_photos&&info.product_photos[0]} alt=""/>
        </div>
        <div className="product-details">
          <div className="name">{
           
           info.product_title&&info.product_title.slice(0,60)
          
          }...</div>

          <div className="price">Price: {info.typical_price_range&&info.typical_price_range[0]}</div>
        </div>
      </div>
    </Link>
  );
} ``

export default Product;
