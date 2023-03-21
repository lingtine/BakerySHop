import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getProduct = createAsyncThunk("product/get", async (productId) => {
  const response = await axios.get(
    `http://localhost:81/api/product-detail/${productId}`
  );

  return response.data;
});

export { getProduct };
