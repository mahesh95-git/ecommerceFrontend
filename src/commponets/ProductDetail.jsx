import React from "react";
import { Product } from "./index";
import { Link } from "react-router-dom";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
function ProductDetail() {
  return (
    <>
      <div className="container-5">
        <div className="container-5-1">
          <div className="container-5-1-1">
            <div>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/o/b/11-12-years-bogrhdfulsweatboy-smbz125-blive-original-imagwzk3cngvbuze.jpeg?q=70&crop=false"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/o/b/11-12-years-bogrhdfulsweatboy-smbz125-blive-original-imagwzk3cngvbuze.jpeg?q=70&crop=false"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/o/b/11-12-years-bogrhdfulsweatboy-smbz125-blive-original-imagwzk3cngvbuze.jpeg?q=70&crop=false"
                alt=""
              />
            </div>
          </div>
          <div className="container-5-1-2">
            <img
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/l/o/b/11-12-years-bogrhdfulsweatboy-smbz125-blive-original-imagwzk3cngvbuze.jpeg?q=70&crop=false"
              alt=""
            />
          </div>
        </div>
        <div className="container-5-2">
          <div className="container-5-2-1">
            <h2>Men Printed Hooded Neck Cotton Blend Dark Blue T-Shirt</h2>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
              similique repellat a quod minima laudantium, reprehenderit
              sapiente delectus distinctio dignissimos!
            </div>
            <div className="product-price">
              <p>Price: $400.00</p>
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
  const data = [
    {
      name: "SAMSUNG Galaxy S22 5G (Green, 128 GB)  (8 GB RAM)",
      img: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70&crop=false",
      price: 0.99,
    },
    {
      name: "Men's Mid Top Ankle Retro Air Sneakers",
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/t/c/7-g1-822-style-code-7-zixer-black-original-imagpm4szxw3xu9d.jpeg?q=70&crop=true",
      price: 0.99,
    },
    {
      name: "Boys Full Sleeve Color Block Hooded Sweatshirt",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/i/s/p/xxl-brbhdfulsweat-smz125-blive-original-imagtzz5het3aswr.jpeg?q=70",
      price: 0.99,
    },
    {
      name: "Boys Full Sleeve Printed Sweatshirt",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/a/x/f/4-5-years-sweatshirt-for-boys-black-bitsu-bobsu-original-imagvxuxnyghmhw2.jpeg?q=70",
      price: 0.99,
    },
    {
      name: "realme Buds 2 Wired Headset  (Black, In the Ear)",
      img: "https://rukminim2.flixcart.com/image/416/416/k20r8nk0/headphone/7/w/c/realme-buds-2-original-imafhgrckbygsyrk.jpeg?q=70&crop=false",
      price: 0.99,
    },
    {
      name: "Google Pixel 7a (Sea, 128 GB)  (8 GB RAM)",
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",
      price: 0.99,
    },
    {
      name: "MILTON ERNESTO JR. Pack of 3",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/casserole/s/t/e/3-cthfftk202redd0001-milton-original-imagg9k6egw5bjue.jpeg?q=70",
      price: 0.99,
    },
  ];
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
