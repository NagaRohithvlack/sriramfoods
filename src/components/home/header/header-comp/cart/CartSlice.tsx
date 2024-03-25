import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItemIndex = state.items.findIndex((item) => {
        return item.itemTitle === action.payload.itemTitle;
      });

      if (existingItemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity++;
        
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.itemTitle !== action.payload.itemTitle
      );
    },
    emptyingCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, emptyingCart } = cartSlice.actions;
export default cartSlice.reducer;
