import React, { useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

import { useCreateNewOrderMutation } from "../redux/api/order";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { resetCart } from "../redux/controller/cart";
import { useClearCartMutation } from "../redux/api/cart";
const stripePromiese = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
function Payment() {
  const location = useLocation();
  const clientSecret = location.state.client_secret;
  const options = {
    clientSecret,
  };

  const CheckoutFrom = () => {
    const [newOrder, { data }] = useCreateNewOrderMutation();
    const [clearCart] = useClearCartMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      (async () => {
        if (data && data.success) {
          await clearCart();
          toast.success(data.message);
          dispatch(resetCart());
          navigate("/orders");
        }
      })();
    }, [data, dispatch, clearCart, navigate]);
    const {
      cart: { cartItem },
      totalAmount,
      taxPrice,
      shippingPrice,
      itemPrice,
    } = useSelector((state) => state.userCart);

    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!stripe || !elements) {
        setLoading(false);
        return;
      }

      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin,
        },
        redirect: "if_required",
      });

      if (result.error) {
        setLoading(false);
        console.error("Payment failed:", result.error.message);
      } else if (result.paymentIntent.status == "succeeded") {
        const orderItems =
          cartItem &&
          cartItem.map((value) => ({
            name: value.productId.name,
            image: value.productId.images[0].url,
            price: value.productId.price,
            quantity: value.productQuantity,
            product: value.productId._id,
          }));

        const body = {
          shippingInfo: {
            address: {
              streetAddress: "kolhapur",
              city: "kolhapur",
              state: "maharashtra",
              pinCode: 5454545,
              country: "india",
            },
            phone: 9370079379,
          },
          orderItems,
          paymentInfo: {
            id: result.paymentIntent.id,
            itemPrice,
            taxPrice,
            status: true,
            shippingPrice,
            totalPrice: totalAmount,
          },
        };
        await newOrder(body);
        setLoading(false);
      }
    };
    return (
      <div className="checkoutFrom">
        <form onSubmit={handleSubmit}>
          <PaymentElement />

          <button>{loading ? "processing..." : "Pay"}</button>
        </form>
      </div>
    );
  };
  return (
    <Elements stripe={stripePromiese} options={options}>
      <CheckoutFrom />
    </Elements>
  );
}

export default Payment;
