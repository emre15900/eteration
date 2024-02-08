import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface FavoritesState {
  items: number[];
}

let initialState: FavoritesState = {
  items: [],
};

if (typeof window !== 'undefined') {
  initialState.items = JSON.parse(localStorage.getItem("favorites") || "[]");
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (!state.items.includes(productId)) {
        state.items.push(productId);
      } else {
        state.items = state.items.filter((id) => id !== productId);
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.items;

export default favoritesSlice.reducer;
