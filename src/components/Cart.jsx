import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import {
  useGetAllCartItemsQuery,
  useRemoveItemMutation,
  useUpdateItemQuantityMutation,
} from "../redux/api/cart";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCartItem } from "../redux/controller/cart";
function Cart() {
  const {
    isLoading: allItemsLoading,
    data,
    isError: allItemError,
  } = useGetAllCartItemsQuery();
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      handleSetTotalPrice();
      dispatch(setCartItem({ cartItem: data.data, totalAmount: totalPrice }));
    }
  }, [data, dispatch, totalPrice]);
  const [remove, { isLoading: removeItemLoading, isError: removeError }] =
    useRemoveItemMutation();

  const [update, { isLoading: updateItemLoading, isError: updateError }] =
    useUpdateItemQuantityMutation();

  const handleRemoveProductFromCart = async (productId) => {
    await remove(productId);
    toast.success("Product Remove from cart Successfully!");
  };
  const handleProductUpdateQuantity = async (productId, productQuantity) => {
    await update({ productId, productQuantity });
    toast.success("Product Quantity Updated Successfully!");
  };
  if (allItemsLoading || removeItemLoading || updateItemLoading) {
    return <Loader />;
  }
  if (allItemError) {
    toast.error(allItemError.data.message);
  }
  if (removeError) {
    toast.error(removeError.data.message);
  }
  if (updateError) {
    toast.error(updateError.data.message);
  }

  const { cartItem } = data?.data ?? {};

  const handleSetTotalPrice = () => {
    if (cartItem) {
      const total = cartItem.reduce(
        (total, item) => total + item.productQuantity * item.productId.price,
        0
      );
      setTotalPrice(total);
    }
  };
  const totalItems =
    cartItem &&
    cartItem.reduce((total, item) => total + item.productQuantity, 0);

  const handlePlaceOrder = () => {
    navigate("/shippinginfo");
  };
  return cartItem?.length ? (
    <div className="container-11">
      <div className="container-11-1">
        {cartItem &&
          cartItem.map((value, index) => (
            <div className="cart-container" key={index}>
              <div className="img-container">
                <Link to={`/product/${value.productId._id}`} target="_blank">
                  <img
                    src={value.productId.images[0].url}
                    alt={value.productId.name}
                  />
                </Link>
              </div>
              <div className="productInfo-container">
                <div className="name">
                  <h4>{value.productId.name}</h4>
                </div>
                <div className="description">{value.productId.description}</div>
                <div className="price">Price: {value.productId.price} ₹</div>
                <div className="add-remove-container">
                  <div className="container-5-2-4">
                    <button
                      onClick={() =>
                        handleProductUpdateQuantity(
                          value.productId._id,
                          value.productQuantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      readOnly
                      value={value.productQuantity}
                    />
                    <button
                      onClick={() =>
                        handleProductUpdateQuantity(
                          value.productId._id,
                          value.productQuantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="remove-button">
                    <button
                      onClick={() =>
                        handleRemoveProductFromCart(value.productId._id)
                      }
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="container-11-2">
        <div className="price-detail">
          <h3>PRICE DETAILS</h3>
        </div>
        <div className="price-section">
          <div>
            Price(
            {totalItems} items)
          </div>
          <div>
            <span>{totalPrice}</span>₹
          </div>
        </div>
        <div className="price-section">
          <div>Discount</div>
          <div>0%</div>
        </div>
        <div className="price-section">
          <div>Delivery Charges</div>
          <div>0 Free Of Deliver</div>
        </div>
        <div className="price-section">
          <div>Tax</div>
          <div>0₹</div>
        </div>
        <div className="price-section">
          <div>Total Amount</div>
          <div>
            <span>{totalPrice}</span>₹
          </div>
        </div>
        <div className="price-section">
          <div>Coupon Code</div>
          <div className="coupon_container">
            <div>
              <input type="text" placeholder="enter coupon code" />
            </div>
            <button>Apply</button>
          </div>
        </div>
        <div className="place-order">
          <button onClick={handlePlaceOrder}>PLACE ORDER</button>
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
