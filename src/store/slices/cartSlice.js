import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: {
      user_id: "",
      items: [],
      total: 0,
    },
    error: null,
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
