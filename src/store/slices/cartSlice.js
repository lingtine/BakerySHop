import { createSlice } from "@reduxjs/toolkit";
import { getUser, authRefresh } from "../thunks";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: {
      userId: 0,
      items: [],
      total: 0,
    },
    error: null,
    status: "idle",
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.userId = action.payload.userId;
      if (state.data.items.length === 0) {
        state.data.items.push(action.payload.product);
      } else {
        const productIndex = state.data.items.findIndex((item) => {
          return (
            item.productId === action.payload.product.productId &&
            item.productType === action.payload.product.productType
          );
        });
        if (productIndex !== -1) {
          state.data.items[productIndex].quantity +=
            action.payload.product.quantity;
        } else {
          state.data.items.push(action.payload.product);
        }
      }
      state.data.total = state.data.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      localStorage.setItem(
        `cart_${state.data.userId}`,
        JSON.stringify(state.data)
      );
    },
    setCart: (state, action) => {
      state.data = action.payload;
    },
    updateCart: (state, action) => {
      const productIndex = state.data.items.findIndex((item) => {
        return (
          item.productId === action.payload.product.productId &&
          item.productType === action.payload.product.productType
        );
      });

      state.data.items[productIndex].quantity = action.payload.product.quantity;

      state.data.total = state.data.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      localStorage.setItem(
        `cart_${state.data.userId}`,
        JSON.stringify(state.data)
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const cart = localStorage.getItem(`cart_${action.payload.id}`);
      if (cart) {
        state.data = cart;
      }
    });
    builder.addCase(authRefresh.fulfilled, (state, action) => {
      state.data = {
        userId: 0,
        items: [],
        total: 0,
      };
    });
  },
});

export const { addToCart, setCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
