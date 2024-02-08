import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/apps/favoritesSlice";
import { RootState } from "@/store/store";
import ProductCard from "@/components/productCard";

const Favorites = () => {
  const favoriteIds = useSelector((state: RootState) => selectFavorites(state));
  const products = useSelector((state: RootState) => state.products.products);

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <div>
      <h1>Favori Ürünlerim</h1>
      <div>
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
