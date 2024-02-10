import React from "react";
import { Grid, Card, Typography, Divider, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "@/store/apps/cartSlice";
import EButton from "../e-button";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleIncreaseQuantity = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    // toast.success(`Products deleted from cart!`);
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
                <Grid sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Grid sx={{ width: "50px", minWidth: "50px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="100%"
                      style={{ borderRadius: "10px" }}
                    />
                  </Grid>
                  <Typography variant="subtitle2" sx={{ color: "#ffffff" }}>
                    {item.name}
                  </Typography>
                </Grid>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#66FF84", fontWeight: 800 }}
                >
                  {(item.price * item.quantity).toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
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
        {cartItems.length > 0 && (
          <Grid
            onClick={handleClearCart}
            sx={{ display: "flex", width: "100%", mt: 2 }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                backgroundColor: "#660061",
                color: "#ffffff",
                padding: "7px 2rem",
                borderRadius: "30px",
                fontWeight: 700,
                cursor: "pointer",
                border: "1px solid #660061",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#9c3b97",
                  color: "#ffffff",
                },
              }}
            >
              Clear Cart
            </Button>
          </Grid>
        )}
        <ToastContainer />
      </Card>
    </Grid>
  );
}

export default Cart;
