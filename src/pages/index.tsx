import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import { Grid, Typography, Container, Divider } from "@mui/material";
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

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  // console.log("searchQuery:", searchQuery);

  const filteredProducts = searchQuery
    ? products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const totalFilteredItemsCount = filteredProducts.length;

  // console.log("filteredProducts:", filteredProducts);

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

  const [selectedBrands, setSelectedBrands] = useState(["apple"]);
  const [selectedModels, setSelectedModels] = useState(["iphone13"]);

  const handleBrandChange = (event: any) => {
    const brand = event.target.value;
    setSelectedBrands((prevSelectedBrands) => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter(
          (selectedBrand) => selectedBrand !== brand
        );
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const handleModelChange = (event: any) => {
    const model = event.target.value;
    setSelectedModels((prevSelectedModels) => {
      if (prevSelectedModels.includes(model)) {
        return prevSelectedModels.filter(
          (selectedModel) => selectedModel !== model
        );
      } else {
        return [...prevSelectedModels, model];
      }
    });
  };

  //   console.log("Brands:", selectedBrands);
  //   console.log("Models:", selectedModels);

  const brands = [
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Huawei", value: "huawei" },
  ];

  const models = [
    { label: "iPhone 11", value: "iphone11" },
    { label: "iPhone 12", value: "iphone12" },
    { label: "iPhone 13", value: "iphone13" },
  ];

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
                <Brands
                  title="Brands"
                  brands={brands}
                  selectedBrands={selectedBrands}
                  onBrandChange={handleBrandChange}
                />
              </Grid>
              <Grid sx={{ mt: 2 }}>
                <Brands
                  title="Models"
                  brands={models}
                  selectedBrands={selectedModels}
                  onBrandChange={handleModelChange}
                />
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
                          pageRangeDisplayed={5}
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
              {/* <Cart /> */}
              <ShoppingCart />
            </Grid>
            <Grid sx={{ mt: 2, mb: 5 }}>
              {/* <CheckOut /> */}
              <AppCheckout />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomePage;
