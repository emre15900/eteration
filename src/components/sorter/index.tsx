import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Card,
  Typography,
  Divider,
} from "@mui/material";

function Sorter() {
  const [selectedValue, setSelectedValue] = React.useState("oldToNew");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // console.log("Sorter:", selectedValue);

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>Sort By</Typography>
        <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
        <FormControl>
          <RadioGroup
            aria-labelledby="sort-by"
            defaultValue="oldToNew"
            name="sort-by"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="oldToNew"
              control={
                <Radio
                  sx={{
                    color: selectedValue === "oldToNew" ? "#66FF84" : "#ffffff",
                    "&.Mui-checked": {
                      color: "#66FF84",
                    },
                  }}
                />
              }
              label="Old to new"
              sx={{
                color: selectedValue === "oldToNew" ? "#66FF84" : "#ffffff",
                "&.Mui-checked": {
                  color: "#66FF84",
                },
              }}
            />
            <FormControlLabel
              value="newToOld"
              control={
                <Radio
                  sx={{
                    color: selectedValue === "newToOld" ? "#66FF84" : "#ffffff",
                    "&.Mui-checked": {
                      color: "#66FF84",
                    },
                  }}
                />
              }
              label="New to old"
              sx={{
                color: selectedValue === "newToOld" ? "#66FF84" : "#ffffff",
                "&.Mui-checked": {
                  color: "#66FF84",
                },
              }}
            />
            <FormControlLabel
              value="hightToLow"
              control={
                <Radio
                  sx={{
                    color:
                      selectedValue === "hightToLow" ? "#66FF84" : "#ffffff",
                    "&.Mui-checked": {
                      color: "#66FF84",
                    },
                  }}
                />
              }
              label="Price high to low"
              sx={{
                color: selectedValue === "hightToLow" ? "#66FF84" : "#ffffff",
                "&.Mui-checked": {
                  color: "#66FF84",
                },
              }}
            />
            <FormControlLabel
              value="lowToHight"
              control={
                <Radio
                  sx={{
                    color:
                      selectedValue === "lowToHight" ? "#66FF84" : "#ffffff",
                    "&.Mui-checked": {
                      color: "#66FF84",
                    },
                  }}
                />
              }
              label="Price low to high"
              sx={{
                color: selectedValue === "lowToHight" ? "#66FF84" : "#ffffff",
                "&.Mui-checked": {
                  color: "#66FF84",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Card>
    </Grid>
  );
}

export default Sorter;
