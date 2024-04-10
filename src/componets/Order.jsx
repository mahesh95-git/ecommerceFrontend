import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader"
function Order() {
  const data=[
    {
      name:"Men's Long Sleeve Solid Color Tops New Streetwear Casual Fashion Green / XL / United States",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQb99m_fqeBP-GAX-vEQHdVVLWRzm8ceoJJ_sd69Dq3Iv5RmkVZgJzBASK6RNLNvRALvt8WiK-VxFXRVt-gDbHCvN4uTtbo8w&usqp=CAE",
      price:0.99,
      status:"processing"
    },
    {
      name:"Men Scroll Print Button Up Shirt,Xxl",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSzmztV4CpHUQO3qS-kRQ4MboYMz4M2Zv-X3EAt-uekzBhuhzzF-AcEDb5E6w1CMC63CsvbK_Y4FoIZGyreSy-Feur5sFS9Q&usqp=CAE",
      price:0.99,
      status:"deliver"
    },
    {
      name:"Boys Full Sleeve Color Block Hooded Sweatshirt",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/i/s/p/xxl-brbhdfulsweat-smz125-blive-original-imagtzz5het3aswr.jpeg?q=70",
      price:0.99,
      status:"processing"
    },
    {
      name:"Boys Full Sleeve Printed Sweatshirt",
      img:"https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/a/x/f/4-5-years-sweatshirt-for-boys-black-bitsu-bobsu-original-imagvxuxnyghmhw2.jpeg?q=70",
      price:0.99,
      status:"deliver"
    }
  ]
  const [loader,setLoader]=useState(true)
useEffect(()=>{
 const x= setTimeout(()=>{
setLoader(false)
  },1000)
  return()=>{
clearTimeout(x);
  }
},[])

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

          <div className="order-status">{value.status}</div>
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
