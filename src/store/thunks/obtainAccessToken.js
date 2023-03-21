import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const obtainAccessToken = createAsyncThunk(
  "auth/obtainAccessToken",
  async (data) => {
    const response = await axios.post(
      "http://localhost:81/api/auth/login",
      data
    );
    if (response.data.access_token) {
      localStorage.setItem("accessToken", response.data.access_token);
    }
    return response.data;
  }
);

export { obtainAccessToken };
