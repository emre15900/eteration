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

function HomePage() {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  console.log("searchQuery:", searchQuery);

  const filteredProducts = searchQuery
    ? products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

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

  return (
    <Grid style={{ width: "100%" }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} md={3}>
            <Grid>
              <Grid>
                <Sorter />
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
          <Grid item xs={12} sm={7} md={7}>
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
                <Typography variant="h6" sx={{ color: "#ffffff", mt: 2 }}>
                  Loading...
                </Typography>
              ) : (
                <>
                  <Grid container spacing={1}>
                    {currentItems.map((product: any) => (
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid sx={{ mt: 6, mb: 10 }}>
                    <Pagination
                      activePage={activePage}
                      itemsCountPerPage={itemsPerPage}
                      totalItemsCount={products.length}
                      pageRangeDisplayed={5}
                      onChange={handlePageChange}
                      itemClass="page-item"
                      linkClass="page-link"
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Grid>
              <Cart />
            </Grid>
            <Grid sx={{ mt: 2 }}>
              <CheckOut />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomePage;
