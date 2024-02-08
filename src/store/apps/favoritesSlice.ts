import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface FavoritesState {
  items: number[];
}

const initialState: FavoritesState = {
  items: [],
};

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
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.items;

export default favoritesSlice.reducer;
