import React, { useState } from "react";
import Header from "@/components/header";
import { Grid, Typography, Container } from "@mui/material";
import Sorter from "@/components/sorter";
import Brands from "@/components/brands";

function HomePage() {
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

  console.log("Brands:", selectedBrands);
  console.log("Models:", selectedModels);

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
    <div style={{ width: "100%" }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Grid container spacing={6}>
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
            <Typography sx={{ color: "#000000" }}>Main</Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <Sorter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
