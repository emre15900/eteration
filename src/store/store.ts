import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/store/apps/searchSlice";
import productsReducer from "@/store/apps/productsSlice";
import cartReducer from "@/store/apps/cartSlice";
import selectFavorites from "@/store/apps/favoritesSlice"

export const store = configureStore({
  reducer: {
    search: searchReducer,
    products: productsReducer,
    cart: cartReducer,
    favorites: selectFavorites
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
