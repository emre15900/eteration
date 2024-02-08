import React from "react";
import { Grid, Card, Typography, Divider, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
} from "@/store/apps/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>Cart</Typography>
        <Divider sx={{ background: "#ffffff", mb: 1, mt: 1 }} />
        {cartItems.length === 0 ? (
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: 16,
              textAlign: "center",
              mt: 2,
            }}
          >
            Your cart is empty, please add items
          </Typography>
        ) : (
          cartItems.map((item) => (
            <Grid
              key={item.id}
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
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#66FF84", fontWeight: 800 }}
                >
                  {item.price * item.quantity}₺
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                <Button onClick={() => handleDecreaseQuantity(item.id)}>
                  <RemoveCircleIcon sx={{ color: "#ffffff" }} />
                </Button>
                <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
                  {item.quantity}
                </Typography>
                <Button onClick={() => handleIncreaseQuantity(item.id)}>
                  <AddCircleIcon sx={{ color: "#ffffff" }} />
                </Button>
              </Grid>
            </Grid>
          ))
        )}
      </Card>
    </Grid>
  );
}

export default Cart;
