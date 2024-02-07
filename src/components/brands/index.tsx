import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Card,
  Typography,
  Divider,
  InputBase,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    border: "1px solid #ffffff",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "80%",
    marginRight: 8,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#ffffff",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "100%",
        "&:focus": {
          width: "100%",
        },
      },
    },
  }));

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#ffffff", fontSize: 17 }}>
            Brands
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#ffffff" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>

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
