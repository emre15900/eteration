import React from "react";
import Header from "@/components/header";
import { Grid, Typography, Container } from "@mui/material";
import Sorter from "@/components/sorter";

function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 3}}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3} md={3}>
            <Sorter />
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
