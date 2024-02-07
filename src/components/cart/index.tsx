import React, { useState } from "react";
import { Grid, Card, Typography, Divider, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>Cart</Typography>
        <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Grid
              sx={{
                mt: 1.5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                gap: 2,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "#ffffff" }}>
                Samsung s22
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#66FF84", fontWeight: 800 }}
              >
                12.000₺
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
              <Button onClick={decreaseQuantity}>
                <RemoveCircleIcon sx={{ color: "#ffffff" }} />
              </Button>
              <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
                {quantity}
              </Typography>
              <Button onClick={increaseQuantity}>
                <AddCircleIcon sx={{ color: "#ffffff" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default Cart;
