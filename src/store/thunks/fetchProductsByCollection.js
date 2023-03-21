import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProductsByCollection = createAsyncThunk(
  "fetch/productsByCollection",
  async (productTypeId) => {
    const response = await axios.get(
      `http://localhost:81/api/productType/${productTypeId}`
    );

    return response.data;
  }
);

export { fetchProductsByCollection };
