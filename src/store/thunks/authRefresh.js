import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authRefresh = createAsyncThunk("auth/refresh", () => {
  const response = axios.post("http://localhost:81/api/auth/refresh");
  return response.data;
});

export { authRefresh };
