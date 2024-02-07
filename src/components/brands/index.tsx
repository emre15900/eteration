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

function Brands() {
  const [selectedValue, setSelectedValue] = React.useState(["apple"]);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setSelectedValue((prevSelectedValue) => {
      if (prevSelectedValue.includes(newValue)) {
        return prevSelectedValue.filter((value) => value !== newValue);
      } else {
        return [...prevSelectedValue, newValue];
      }
    });
  };

  console.log("Brands:", selectedValue);

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>Brands</Typography>
        <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
        <FormGroup>
          <FormControlLabel
            value="apple"
            control={
              <Checkbox
                checked={selectedValue.includes("apple")}
                sx={{
                  color: selectedValue.includes("apple")
                    ? "#66FF84"
                    : "#ffffff",
                  "&.Mui-checked": {
                    color: selectedValue.includes("apple")
                      ? "#66FF84"
                      : "#ffffff",
                  },
                }}
                onChange={handleChange}
              />
            }
            label="Apple"
            sx={{
              color: selectedValue.includes("apple") ? "#66FF84" : "#ffffff",
            }}
          />
          <FormControlLabel
            value="samsung"
            control={
              <Checkbox
                checked={selectedValue.includes("samsung")}
                sx={{
                  color: selectedValue.includes("samsung")
                    ? "#66FF84"
                    : "#ffffff",
                  "&.Mui-checked": {
                    color: selectedValue.includes("samsung")
                      ? "#66FF84"
                      : "#ffffff",
                  },
                }}
                onChange={handleChange}
              />
            }
            label="Samsung"
            sx={{
              color: selectedValue.includes("samsung") ? "#66FF84" : "#ffffff",
            }}
          />
          <FormControlLabel
            value="huawei"
            control={
              <Checkbox
                checked={selectedValue.includes("huawei")}
                sx={{
                  color: selectedValue.includes("huawei")
                    ? "#66FF84"
                    : "#ffffff",
                  "&.Mui-checked": {
                    color: selectedValue.includes("huawei")
                      ? "#66FF84"
                      : "#ffffff",
                  },
                }}
                onChange={handleChange}
              />
            }
            label="Huawei"
            sx={{
              color: selectedValue.includes("huawei") ? "#66FF84" : "#ffffff",
            }}
          />
        </FormGroup>
      </Card>
    </Grid>
  );
}

export default Brands;
