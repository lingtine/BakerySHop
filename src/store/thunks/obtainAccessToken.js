import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const obtainAccessToken = createAsyncThunk(
  "auth/getAccessToken",
  async (data) => {
    const response = await axios.post(
      "http://localhost:81/api/auth/login",
      data
    );

    return response.data;
  }
);

export { obtainAccessToken };
