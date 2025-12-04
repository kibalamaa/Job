import { configureStore } from "@reduxjs/toolkit";
import { opportunitiesApi } from "../data/api"; // Adjust path if necessary
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      [opportunitiesApi.reducerPath]: opportunitiesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(opportunitiesApi.middleware),
  });

  // Optional: Required for refetchOnFocus/refetchOnReconnect behaviors
  setupListeners(store.dispatch);

  return store;
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];