import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/apps/favoritesSlice";
import { RootState } from "@/store/store";
import { Typography, Grid, Container } from "@mui/material";
import ProductCard from "@/components/productCard";
import { Product } from "@/interfaces/product";

const Favorites = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<
    Product[] | undefined
  >(undefined);
  const favoriteIds = useSelector((state: RootState) => selectFavorites(state));
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites: number[] = JSON.parse(storedFavorites);
      const filteredProducts = products.filter((product: Product) =>
        parsedFavorites.includes(product.id)
      );
      setFavoriteProducts(filteredProducts);
    }
  }, [products]);

  return (
    <Container maxWidth="xl">
      <Grid>
        <Typography
          variant="h4"
          sx={{ color: "#ffffff", fontWeight: 900, mt: 3, mb: 3 }}
        >
          Favorites
        </Typography>
        <Grid container spacing={3}>
          {favoriteProducts &&
            favoriteProducts.map((product: Product) => (
              <Grid item sm={12} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Favorites;
