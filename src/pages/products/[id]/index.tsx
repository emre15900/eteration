import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchProducts } from "@/store/apps/productsSlice";
import ProductDetailCard from "@/components/productDetailCard";
import { Typography, Grid, Container, useMediaQuery } from "@mui/material";
import ShoppingCart from "@/components/shoppingCart";
import AppCheckout from "@/components/appCheckout";

function ProductDetail() {
  const responsive = useMediaQuery("(max-width:728px)");

  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = id ? products.find((product) => product.id === id) : null;
  const loading = useSelector((state: RootState) => state.products.loading);

  return (
    <Container maxWidth="xl" sx={{ mt: responsive ? 2 : 5, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Grid>
            {loading ? (
              <Typography
                variant="h5"
                sx={{ color: "#ffffff", mt: 5, textAlign: "center" }}
              >
                Loading...
              </Typography>
            ) : (
              product && <ProductDetailCard product={product} />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Grid>
            <ShoppingCart />
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <AppCheckout />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
