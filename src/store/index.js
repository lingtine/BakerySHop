import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  authReducer,
  collectionsReducer,
  productsByCollectionReducer,
  productReducer,
  cartReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    productsByCollection: productsByCollectionReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export { store };
setupListeners(store.dispatch);

export * from "./thunks";
export * from "./slices";
