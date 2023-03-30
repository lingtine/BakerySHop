import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProductsByCollection = createAsyncThunk(
  "fetch/productsByCollection",
  async (productTypeId) => {
    const response = await axios.get(
      `http://localhost:81/api/products-type/${productTypeId}`
    );

    return response.data.productByType;
  }
);

export { fetchProductsByCollection };
