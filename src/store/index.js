import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { authReducer } from "./slices/authSlice";
import {
  useFetchCollectionsQuery,
  collectionsApi,
} from "./apis/collectionsApi";
import {
  useFetchProductsByTypeQuery,
  productsByTypeApi,
} from "./apis/productsByTypeApi";
import {
  authApi,
  useFetchAccessTokenQuery,
  useLoginMutation,
} from "./apis/accessTokenApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [productsByTypeApi.reducerPath]: productsByTypeApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(collectionsApi.middleware)
      .concat(productsByTypeApi.middleware)
      .concat(authApi.middleware);
  },
});

export { store };
setupListeners(store.dispatch);
export * from "./slices/authSlice";
export { useFetchCollectionsQuery };
export { useFetchProductsByTypeQuery };
export { useFetchAccessTokenQuery, useLoginMutation, authApi };
