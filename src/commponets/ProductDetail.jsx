import React, { useEffect, useState } from "react";
import { Navigation, Product } from "./index";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { data } from "../assets/products";
import Loader from "./Loader";
function ProductDetail() {
  const [productDetails, setProductDetails] = useState({});
  const [loader, setLoader] = useState(true);
  const { pathname } = useLocation();
 
  const [image, setImage] = useState("");

  const handleImage = (value) => {
    setImage(productDetails.product_photos[value]);
  };

  useEffect(() => {
    setProductDetails(
      data.filter((value) => value.product_id == pathname.split("/")[2])[0]
    );
    setImage(productDetails.product_photos&&productDetails.product_photos[0]);
    const timeOut = setTimeout(() => {
      setLoader(false);
    }, 1000);
    window.scrollTo(0, 0);
    console.log("hello 2");
    return () => {
      clearTimeout(timeOut);
    };
  }, [pathname, productDetails]);

  return loader?<Loader/>:(
    <>
    <Navigation/>
      <div className="container-5">
        <div className="container-5-1">
          <div className="container-5-1-1">
            {productDetails.product_photos &&
              productDetails.product_photos.map((value, idx) => {
                
                  if(idx>3){
                    return;
                  }else{
                   return <div key={value}>
                    <img src={value} alt="" onMouseOver={() => handleImage(idx)} />
                  </div>
                  }
                 
                
              })}
          </div>
          <div className="container-5-1-2">
            <img src={image&&image} alt="productImage" />
          </div>
        </div>
        <div className="container-5-2">
          <div className="container-5-2-1">
            <h2>{productDetails.product_title}</h2>
          </div>
          <div className="container-5-2-2">
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>
            <span>
              <MdOutlineStarPurple500 />
            </span>

            <span>4000,200</span>
          </div>
          <div className="container-5-2-3">
            <div className="product-description">
            {productDetails.product_description}
            </div>
            <div className="product-price">
              <p>Price:{productDetails.typical_price_range&&productDetails.typical_price_range[0]}</p>
            </div>
          </div>
          <div className="container-5-2-4">
            <button>-</button>
            <input type="number" readOnly value={1} />
            <button>+</button>
          </div>
          <div className="container-5-2-5">
            <div>
              <label htmlFor="L">L</label>
              <input type="radio" id="Z" name="size" />
            </div>
            <div>
              <label htmlFor="M">M</label>
              <input type="radio" id="M" name="size" />
            </div>
          </div>
          <div className="container-5-2-6">
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <UserReview />
      <Similarproducts />
    </>
  );
}

function UserReview() {
  return (
    <div className="container-6">
      <div className="container-6-1">
        <div className="container-6-1-3">
          <span>Ratings & Reviews</span>
          <Link to={`/productReview/${"productid"}`}>
            <span className="rate-button">Rate Product</span>
          </Link>
        </div>
        <div className="container-6-1-1">
          <div>4.4</div>

          <MdOutlineStarPurple500 />

          <div className="container-6-1-2">46,550 Ratings & 4,561 Reviews</div>
        </div>
      </div>

      <div className="container-6-2">
        <div className="container-6-2-1">
          <span className="rating">
            {" "}
            <MdOutlineStarPurple500 /> <span>4</span>
          </span>
          <span className="title">greate product</span>
        </div>
        <div className="container-6-2-2">
          <div className="container-6-2-2-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatibus repellendus eos eligendi ipsam esse, illum officiis
            blanditiis sequi ratione?
          </div>
          <div className="container-6-2-2-2">
            <IoMdCheckmark />
            <div></div>mahesh rathod
          </div>
        </div>
      </div>
      <div className="container-6-2">
        <div className="container-6-2-1">
          <span className="rating">
            {" "}
            <MdOutlineStarPurple500 /> <span>4</span>
          </span>
          <span className="title">greate product</span>
        </div>
        <div className="container-6-2-2">
          <div className="container-6-2-2-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatibus repellendus eos eligendi ipsam esse, illum officiis
            blanditiis sequi ratione?
          </div>
          <div className="container-6-2-2-2">
            <IoMdCheckmark />
            <div></div>mahesh rathod
          </div>
        </div>
      </div>
      <div className="container-6-2">
        <div className="container-6-2-1">
          <span className="rating">
            {" "}
            <MdOutlineStarPurple500 /> <span>4</span>
          </span>
          <span className="title">greate product</span>
        </div>
        <div className="container-6-2-2">
          <div className="container-6-2-2-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatibus repellendus eos eligendi ipsam esse, illum officiis
            blanditiis sequi ratione?
          </div>
          <div className="container-6-2-2-2">
            <IoMdCheckmark />
            <div></div>mahesh rathod
          </div>
        </div>
      </div>
      <div className="container-6-2">
        <div className="container-6-2-1">
          <span className="rating">
            {" "}
            <MdOutlineStarPurple500 /> <span>4</span>
          </span>
          <span className="title">greate product</span>
        </div>
        <div className="container-6-2-2">
          <div className="container-6-2-2-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatibus repellendus eos eligendi ipsam esse, illum officiis
            blanditiis sequi ratione?
          </div>
          <div className="container-6-2-2-2">
            <IoMdCheckmark />
            <div></div>mahesh rathod
          </div>
        </div>
      </div>
      <div className="container-6-2">
        <div className="container-6-2-1">
          <span className="rating">
            {" "}
            <MdOutlineStarPurple500 /> <span>4</span>
          </span>
          <span className="title">greate product</span>
        </div>
        <div className="container-6-2-2">
          <div className="container-6-2-2-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatibus repellendus eos eligendi ipsam esse, illum officiis
            blanditiis sequi ratione?
          </div>
          <div className="container-6-2-2-2">
            <IoMdCheckmark />
            <div></div>mahesh rathod
          </div>
        </div>
      </div>
    </div>
  );
}

function Similarproducts() {

  return (
    <div className="container-7">
      <div className="container-7-1">
        <span className="title">Similar Products</span>
      </div>
      <div className="container-7-2">
        {data &&
          data.map((value, index) => <Product info={value} key={index} />)}
      </div>
    </div>
  );
}
export default ProductDetail;
