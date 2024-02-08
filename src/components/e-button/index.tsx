import React from "react";
import { Button, Grid } from "@mui/material";

interface EButtonProps {
  title: string;
  padding: string;
}

function EButton({ title, padding }: EButtonProps) {
  return (
    <Grid sx={{ display: "flex", width: "100%" }}>
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          backgroundColor: "#66FF84",
          color: "#000000",
          padding: padding,
          borderRadius: "30px",
          fontWeight: 700,
          cursor: "pointer",
          border: "1px solid rgb(6 159 36)",
          textTransform: "none",
          whiteSpace: "nowrap",
          "&:hover": {
            backgroundColor: "#00b223",
            color: "#ffffff",
          },
        }}
      >
        {title}
      </Button>
    </Grid>
  );
}

export default EButton;
