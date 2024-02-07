import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Card,
  Typography,
  Divider,
} from "@mui/material";

function Brands({ brands, selectedBrands, onBrandChange, title }: any) {
  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>{title}</Typography>
        <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
        <FormGroup>
          {brands.map((brand: any) => (
            <FormControlLabel
              key={brand.value}
              value={brand.value}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand.value)}
                  onChange={onBrandChange}
                  sx={{
                    color: selectedBrands.includes(brand.value)
                      ? "#66FF84"
                      : "#ffffff",
                    "&.Mui-checked": {
                      color: selectedBrands.includes(brand.value)
                        ? "#66FF84"
                        : "#ffffff",
                    },
                  }}
                />
              }
              label={brand.label}
              sx={{
                color: selectedBrands.includes(brand.value)
                  ? "#66FF84"
                  : "#ffffff",
              }}
            />
          ))}
        </FormGroup>
      </Card>
    </Grid>
  );
}

export default Brands;
