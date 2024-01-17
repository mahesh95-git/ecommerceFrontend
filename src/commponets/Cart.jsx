import React from "react";
import { Link } from "react-router-dom";

function Cart() {
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
        name: "MILTON ERNESTO JR. Pack of 3 Thermoware Casserole Set  (500 ml, 1000 ml, 1500 ml)",
        img: "https://rukminim2.flixcart.com/image/612/612/xif0q/casserole/s/t/e/3-cthfftk202redd0001-milton-original-imagg9k6egw5bjue.jpeg?q=70",
        price: 0.99,
      },
  ];
  return data?.length ? (
    <div className="container-11">
      <div className="container-11-1">
        {data &&
          data.map((value, index) => (
            <div className="cart-container" key={index}>
              <div className="img-container">
                <img src={value.img} alt={value.name} />
              </div>
              <div className="productInfo-container">
                <div className="name">
                  <h4>{value.name}</h4>
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  illo alias id culpa aliquam mollitia neque fugit adipisci,
                  corrupti natus aut labore ipsa voluptas impedit quia vitae
                  dicta eos quisquam!
                </div>
                <div className="price">{value.price}</div>
                <div className="add-remove-container">
                  <div className="container-5-2-4">
                    <button>-</button>
                    <input type="number" readOnly value={1} />
                    <button>+</button>
                  </div>
                  <div className="remove-button">
                    <button>REMOVE</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="container-11-2">
        <div className="price-detail">
          <h3>PRICE DETALIS</h3>
        </div>
        <div className="price-section">
          <div>Price(3items)</div>
          <div>$9000.00</div>
        </div>
        <div className="price-section">
          <div>Discount</div>
          <div>0</div>
        </div>
        <div className="price-section">
          <div>Delivery Charges</div>
          <div>0 Free</div>
        </div>
        <div className="price-section">
          <div>Total Amount</div>
          <div>20000</div>
        </div>
        <div className="place-order">
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container-12">
      <p>EMPTY CART</p>
      <Link to={"/"}>
        <h3>Shopping Now</h3>
      </Link>
    </div>
  );
}

export default Cart;
