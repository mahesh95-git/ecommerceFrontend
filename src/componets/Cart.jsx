import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateProductAmount, removeFromCart } from "../redux/controller/cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Cart() {
  const dispatch=useDispatch();
  const  {cart,totalAmount,totalItem} = useSelector((state) => state.cart);
 
  const handleRemoveProductFromCart=(id)=>{
    dispatch(removeFromCart(id));
  }
  useEffect(()=>{
    dispatch(calculateProductAmount());
  },[dispatch,cart])
  return cart?.length ? (
    <div className="container-11">
      <div className="container-11-1">
        {cart &&
          cart.map((value, index) => (
            <div className="cart-container" key={index}>
              <div className="img-container">
                <Link to={`/product/${value.product_id}`}>
                <img src={value.product_photos[0]} alt={value.name} />
                </Link>
              </div>
              <div className="productInfo-container">
                <div className="name">
                  <h4>{value.product_title}</h4>
                </div>
                <div className="description">
                 {value.product_description}
                </div>
                <div className="price">{value.typical_price_range[0]}</div>
                <div className="add-remove-container">
                  <div className="container-5-2-4">
                    <button>-</button>
                    <input type="number" readOnly value={1} />
                    <button>+</button>
                  </div>
                  <div className="remove-button">
                    <button onClick={()=>handleRemoveProductFromCart(value.product_id)} >REMOVE</button>
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
          <div>Price({totalItem} items)</div>
          <div>${totalAmount}</div>
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
          <div>{totalAmount}$</div>
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
