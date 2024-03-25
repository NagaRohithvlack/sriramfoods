import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/home/header/header-comp/cart/CartSlice.js";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
