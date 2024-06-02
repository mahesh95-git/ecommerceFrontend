import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../controller/cart";
import { authApi } from "../api/auth";
import { product } from "../api/product";
import userSlice from "../controller/user";

import { cartApi } from "../api/cart";
import { orderApi } from "../api/order";
import { adminApi } from "../api/admin";

const store = configureStore({
  reducer: {
    userCart: cartSlice,
    [authApi.reducerPath]: authApi.reducer,
    [product.reducerPath]: product.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    user: userSlice,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(product.middleware)
      .concat(cartApi.middleware)
      .concat(orderApi.middleware)
      .concat(adminApi.middleware),
});
export default store;
