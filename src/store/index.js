import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  authReducer,
  collectionsReducer,
  productsByCollectionReducer,
  productReducer,
  cartReducer,
  newProductsReducer,
  sellingProductsReducer,
} from "./slices";

const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: collectionsReducer,
    productsByCollection: productsByCollectionReducer,
    product: productReducer,
    cart: cartReducer,
    newProducts: newProductsReducer,
    sellingProducts: sellingProductsReducer,
  },
});

export { store };
setupListeners(store.dispatch);

export * from "./thunks";
export * from "./slices";
