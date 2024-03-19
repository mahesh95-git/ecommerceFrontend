import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { Cart } from "../../commponets";

const initialState = {
  cart: [],
  totalAmount: 0,
  totalItem: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const idx = state.cart.findIndex(
        (value) => value.product_id === action.payload.product_id
      );
      if (idx < 0) {
        state.cart.push(action.payload);
        toast.success("added to cart");
      } else {
        toast.success("already added in the cart");
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (value) => value.product_id != action.payload
      );
      toast.success("removed product");
    },
    calculateProductAmount: (state) => {
      let amount = 0;
      let item=0;
      state.cart.forEach((value) => {
        amount += Number(value.typical_price_range[0].split("$")[1]);
        item++;
      });
      console.log(item)
      state.totalAmount = amount;
      state.totalItem = item;
    },
  },
});
export const { addToCart, removeFromCart, calculateProductAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
