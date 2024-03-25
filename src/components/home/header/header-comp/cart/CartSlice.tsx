import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.pop(action.payload);
    },
    emptyingCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, emptyingCart } = cartSlice.actions;
export default cartSlice.reducer;
