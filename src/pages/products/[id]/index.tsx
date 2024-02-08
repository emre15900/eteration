import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchProducts } from "@/store/apps/productsSlice";
import ProductDetailCard from "@/components/productDetailCard";
import { Typography, Grid, Container } from "@mui/material";
import Cart from "@/components/cart";
import CheckOut from "@/components/checkout";

function ProductDetail() {
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
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={9} md={9}>
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
        <Grid item xs={12} sm={3} md={3}>
          <Grid>
            <Cart />
          </Grid>
          <Grid sx={{ mt: 2 }}>
            <CheckOut />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
