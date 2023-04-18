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
  faqsReducer,
  noNastiesReducer,
  branchReducer,
  forteReducer,
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
    fags: faqsReducer,
    noNasties: noNastiesReducer,
    branch: branchReducer,
    forte: forteReducer,
  },
});

export { store };
setupListeners(store.dispatch);

export * from "./thunks";
export * from "./slices";
