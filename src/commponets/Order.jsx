import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader"
function Order() {
  const data=[
    {
      name:"SAMSUNG Galaxy S22 5G (Green, 128 GB)  (8 GB RAM)",
      img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/h/c/-original-imagth5xwrg4gfyp.jpeg?q=70&crop=false",
      price:0.99,
    },
    {
      name:"Men's Mid Top Ankle Retro Air Sneakers",
      img:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/t/c/7-g1-822-style-code-7-zixer-black-original-imagpm4szxw3xu9d.jpeg?q=70&crop=true",
      price:0.99,
    },
    {
      name:"Boys Full Sleeve Color Block Hooded Sweatshirt",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/i/s/p/xxl-brbhdfulsweat-smz125-blive-original-imagtzz5het3aswr.jpeg?q=70",
      price:0.99,
    },
    {
      name:"Boys Full Sleeve Printed Sweatshirt",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/a/x/f/4-5-years-sweatshirt-for-boys-black-bitsu-bobsu-original-imagvxuxnyghmhw2.jpeg?q=70",
      price:0.99,
    },
    {
      
      name:"realme Buds 2 Wired Headset  (Black, In the Ear)",
      img:"https://rukminim2.flixcart.com/image/416/416/k20r8nk0/headphone/7/w/c/realme-buds-2-original-imafhgrckbygsyrk.jpeg?q=70&crop=false",
      price:0.99,
    },
    {
      name:"Google Pixel 7a (Sea, 128 GB)  (8 GB RAM)",
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70",
      price:0.99,
    },
    {
      name:"MILTON ERNESTO JR. Pack of 3 Thermoware Casserole Set  (500 ml, 1000 ml, 1500 ml)",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/casserole/s/t/e/3-cthfftk202redd0001-milton-original-imagg9k6egw5bjue.jpeg?q=70",
      price:0.99,
    }
  ]
  const [loader,setLoader]=useState(false)
  return (
    <div className="container-21">
      <div className="container-21-1">
        <h2>MY ORDERS</h2>
      </div>
      <div className="container-21-2">
       {loader?<Loader/> :data?data.map((value)=>(
        <div className="orderDetail" key={value.name}>
          <Link to={"/productDetial/jfkjdkjka"}>
            {" "}
            <img
              src={value.img}
              alt=""
            />
          </Link>
          <div className="productInfo">
            <div className="name">
            {value.name}
            </div>

            <div className="price">350$ / piece - Quantity: 4</div>
          </div>

          <div className="shipping-address">
            <span>Delivery Address:</span>
            <div>
              <div>Mahesh</div>
              Naiknagar Umarga Subdistrict, Osmanabad District - 413605,
              Maharashtra
              <div>Phone number:9370079379</div>
            </div>
          </div>

          <div className="order-status">Processing</div>
          <div className="order-cancle">Cancle</div>
        </div>
       )): <div className="container-12">
       <p>No Orders</p>
       <Link to={"/"}>
         <h3>Shopping Now</h3>
       </Link>
     </div>
}
      </div>
       
    </div>
  );
}

export default Order;
