import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/apps/favoritesSlice";
import { RootState } from "@/store/store";
import { Typography, Grid, Container, CircularProgress } from "@mui/material";
import ProductCard from "@/components/productCard";

const Favorites = () => {
  const favoriteIds = useSelector((state: RootState) => selectFavorites(state));
  const products = useSelector((state: RootState) => state.products.products);

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <Container maxWidth="xl">
      <Grid>
        <Typography
          variant="h4"
          sx={{ color: "#ffffff", fontWeight: 900, mt: 3, mb: 3 }}
        >
          Favorites
        </Typography>
        {favoriteProducts.length === 0 ? (
          <Typography variant="subtitle1" sx={{ color: "#ffffff", mt: 2 }}>
            You have no favorite product.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {favoriteProducts.map((product) => (
              <Grid item sm={12} md={4} lg={3} key={product.id}>
                <ProductCard key={product.id} product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
