import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount:0,
  taxPrice:0,
  shippingPrice:0,
  itemPrice:0

};
const cartSlice = createSlice({
  name: "userCart",
  initialState: initialState,
  reducers: {
    setCartItem: (state, action) => {
      state.itemPrice=action.payload.totalAmount
      state.totalAmount=action.payload.totalAmount;
      state.cart = action.payload.cartItem;
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});
export const { setCartItem,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
