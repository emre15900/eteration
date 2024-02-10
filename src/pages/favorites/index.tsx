import React from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/apps/favoritesSlice";
import { RootState } from "@/store/store";
import {
  Typography,
  Grid,
  Container,
  CircularProgress,
  Divider,
} from "@mui/material";
import ProductCard from "@/components/productCard";
import ShoppingCart from "@/components/shoppingCart";
import CheckOut from "@/components/checkout";

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
          sx={{ color: "#ffffff", fontWeight: 900, mt: 3, mb: 2 }}
        >
          Favorites
        </Typography>
        <Divider sx={{ background: "#ffffff", mb: 3 }} />
        {favoriteProducts.length === 0 ? (
          <Typography variant="subtitle1" sx={{ color: "#ffffff", mt: 2 }}>
            You have no favorite product.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Grid container spacing={3}>
                {favoriteProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={6} lg={3} key={product.id}>
                    <ProductCard key={product.id} product={product} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}  sm={12} md={4} lg={3}>
              <Grid>
                <ShoppingCart />
              </Grid>
              <Grid sx={{ mt: 2 }}>
                <CheckOut />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Favorites;
