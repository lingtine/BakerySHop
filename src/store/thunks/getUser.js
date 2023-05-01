import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUser = createAsyncThunk("user/get", async (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  const response = await axios.get("http://localhost:81/api/auth/user-profile");
  console.log(response.data);
  return response.data;
});

export { getUser };
