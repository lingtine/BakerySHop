import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import {
  authReducer,
  authSlice,
  collectionsReducer,
  productsByCollectionReducer,
  productReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    productsByCollection: productsByCollectionReducer,
    product: productReducer,
  },
});

export { store };
setupListeners(store.dispatch);

const token = localStorage.getItem("accessToken");
if (token) {
  store.dispatch(authSlice.actions.setToken(token));
}
export * from "./thunks";
export * from "./slices";
