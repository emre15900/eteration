import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/apps/favoritesSlice";
import { RootState } from "@/store/store";

const Favorites = () => {
  const favorites = useSelector((state: RootState) => selectFavorites(state));
  console.log("favorites:", favorites);
  return (
    <div>
      <h2>Favori Ürünlerim</h2>
      <ul>
        {favorites.map((favoriteId) => (
          <li key={favoriteId}>{/* Favori ürünü burada göster */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
