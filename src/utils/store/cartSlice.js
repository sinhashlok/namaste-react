import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      const itemIndex = current(state.items).findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
      state.items = state.items;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
