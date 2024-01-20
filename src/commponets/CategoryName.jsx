import React from "react";
import { Link } from "react-router-dom";
function CategoryName() {
  const categorys = [
    {
      name: "Fasion",
      img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/74f0eb6cc10e2743.png?q=100",
    },
    {
      name: "Electronic",
      img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/629b0a6f61037ae6.png?q=100",
    },
    {
      name: "Home & Kitchen",
      img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/38d4fbb64c70a3ff.png?q=100",
    },
    {
      name: "Appliances",
      img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/f2802fac96dffea9.png?q=100",
    },
    {
      name: "Furniture",
      img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/fef14e08ec83a6d7.png?q=100",
    },
  ];
  return (
    <div className="container-3">
      {categorys &&
        categorys.map((value) => (
          <div className="container-3-1" key={value.name}>
            <Link to={`category/${value.name}`}>
              <img src={value.img} alt="" />
              <div>{value.name}</div>
            </Link>
     
          </div>
        ))}
    </div>
  );
}

export default CategoryName;
