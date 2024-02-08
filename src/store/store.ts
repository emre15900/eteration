import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/store/apps/searchSlice";
import productsReducer from "@/store/apps/productsSlice";
import cartReducer from "@/store/apps/cartSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
