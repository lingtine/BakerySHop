import { createSlice } from "@reduxjs/toolkit";
import { obtainAccessToken, getUser, authRefresh, register } from "../thunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: false,
    user: null,
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    //logout in
    builder
      .addCase(obtainAccessToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(obtainAccessToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.accessToken = action.payload.access_token;
        state.isAuthenticated = true;
        localStorage.setItem("accessToken", action.payload.access_token);
      })
      .addCase(obtainAccessToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        console.log(action.payload);
      });
    //get user
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    //logout
    builder
      .addCase(authRefresh.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authRefresh.fulfilled, (state) => {
        state.status = "succeeded";
        state.accessToken = null;
        state.isAuthenticated = false;
        localStorage.removeItem("accessToken");
      })
      .addCase(authRefresh.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export { authSlice };

export default authSlice.reducer;
