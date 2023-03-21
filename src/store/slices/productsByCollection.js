import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsByCollection } from "../thunks";

const productsByCollectionSlice = createSlice({
  name: "productsByCollection",
  initialState: {
    data: null,
    error: null,
    status: "idle",
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCollection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCollection.rejected, (state, actions) => {
        state.status = "failed";
        state.data = actions.payload;
      })
      .addCase(fetchProductsByCollection.fulfilled, (state, actions) => {
        state.status = "succeeded";
        state.data = actions.payload;
      });
  },
});

export default productsByCollectionSlice.reducer;
