import { createSlice } from "@reduxjs/toolkit";
import { obtainAccessToken } from "../thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(obtainAccessToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(obtainAccessToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.accessToken = action.payload.access_token;
      })
      .addCase(obtainAccessToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export { authSlice };
export const { clearToken } = authSlice.actions;
export default authSlice.reducer;
