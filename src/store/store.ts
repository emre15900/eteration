import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/store/apps/searchSlice";
import productsReducer from "@/store/apps/productsSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
