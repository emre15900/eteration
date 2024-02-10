import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import {
  Grid,
  Typography,
  Container,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Sorter from "@/components/sorter";
import Brands from "@/components/brands";
import ProductCard from "@/components/productCard";
import Pagination from "react-js-pagination";
import Cart from "@/components/cart";
import CheckOut from "@/components/checkout";

import { AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchProducts } from "@/store/apps/productsSlice";
import ShoppingCart from "@/components/shoppingCart";
import AppCheckout from "@/components/appCheckout";

import { fetchProductsSuccess } from "@/store/apps/productsSlice";


function HomePage() {
  const dispatch: AppDispatch = useDispatch();
  const responsive = useMediaQuery("(max-width:728px)");

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const filteredProducts = searchQuery
    ? products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const totalFilteredItemsCount = filteredProducts.length;

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);

  useEffect(() => {
    const allBrands = products.map((product: any) => product.brand);
    const allModels = products.map((product: any) => product.model);

    setBrands(allBrands);
    setModels(allModels);
  }, [products]);

  const handleBrandChange = (value: any) => {
    setSelectedBrands((prevSelectedBrands) => {
      const nextSelectedBrands = prevSelectedBrands.includes(value)
        ? prevSelectedBrands.filter((selectedBrand) => selectedBrand !== value)
        : [...prevSelectedBrands, value];

      console.log("selectedBrands:", nextSelectedBrands);

      return nextSelectedBrands;
    });
  };

  const handleModelChange = (value: string) => {
    setSelectedModels((prevSelectedModels) => {
      const nextSelectedModels = prevSelectedModels.includes(value)
        ? prevSelectedModels.filter((selectedModel) => selectedModel !== value)
        : [...prevSelectedModels, value];

      console.log("selectedModels:", nextSelectedModels);

      return nextSelectedModels;
    });
  };

  const handleSort = (value: string) => {
    let sortedProducts = [...products];

    switch (value) {
      case "oldToNew":
        sortedProducts.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "newToOld":
        sortedProducts.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "hightToLow":
        sortedProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "lowToHight":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      default:
        break;
    }

    console.log(value);
    console.log(sortedProducts);

    dispatch(fetchProductsSuccess(sortedProducts));
  };

  const handleFilterChange = () => {
    const filteredByBrandsProducts = products.filter((product: any) => {
      if (
        (selectedBrands.length === 0 ||
          selectedBrands.includes(product.brand)) &&
        (selectedModels.length === 0 || selectedModels.includes(product.model))
      ) {
        return true;
      }
      return false;
    });

    dispatch(fetchProductsSuccess(filteredByBrandsProducts));
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedBrands, selectedModels]);

  return (
    <Grid style={{ width: "100%" }}>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <Grid>
              <Grid>
                <Sorter handleSort={handleSort} />
              </Grid>
              <Grid sx={{ mt: 2 }}>
                <Grid sx={{ mt: 2 }}>
                  <Brands
                    title="Brands"
                    brands={brands.map((brand) => ({
                      label: brand,
                      value: brand,
                    }))}
                    selectedBrands={selectedBrands}
                    onBrandChange={handleBrandChange}
                  />
                </Grid>
                <Grid sx={{ mt: 2 }}>
                  <Brands
                    title="Models"
                    brands={models.map((model) => ({
                      label: model,
                      value: model,
                    }))}
                    selectedBrands={selectedModels}
                    onBrandChange={handleModelChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={7}>
            <Grid>
              <Typography
                variant="h4"
                sx={{
                  color: "#ffffff",
                  mb: 2,
                  fontWeight: 900,
                  background: "#000000",
                  padding: "10px 15px",
                  borderRadius: "20px",
                }}
              >
                Products List
              </Typography>
              <Divider flexItem sx={{ background: "#ffffff", mb: 2 }} />
              {loading ? (
                <Typography
                  variant="h5"
                  sx={{ color: "#ffffff", mt: 5, textAlign: "center" }}
                >
                  Loading...
                </Typography>
              ) : (
                <>
                  {totalFilteredItemsCount > 0 ? (
                    <>
                      <Grid container spacing={1}>
                        {currentItems.map((product: any, index: number) => (
                          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={product} />
                          </Grid>
                        ))}
                      </Grid>
                      <Grid sx={{ mt: 6, mb: 10 }}>
                        <Pagination
                          activePage={activePage}
                          itemsCountPerPage={itemsPerPage}
                          totalItemsCount={totalFilteredItemsCount}
                          pageRangeDisplayed={responsive ? 3 : 5}
                          onChange={handlePageChange}
                          itemClass="page-item"
                          linkClass="page-link"
                        />
                      </Grid>
                    </>
                  ) : (
                    <Typography
                      variant="h5"
                      sx={{ color: "#ffffff", mt: 5, textAlign: "center" }}
                    >
                      No products found!
                    </Typography>
                  )}
                </>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2}>
            <Grid>
              <ShoppingCart />
            </Grid>
            <Grid sx={{ mt: 2, mb: 5 }}>
              <AppCheckout />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomePage;
