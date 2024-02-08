import React from "react";
import { Grid, Card, Typography, Divider } from "@mui/material";
import EButton from "../e-button";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/store/apps/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckOut() {
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (acc: any, item: any) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = totalPrice.toLocaleString("tr-TR", {
    style: "currency",
    currency: "TRY",
  });

  const notify = () =>
    toast.success(
      `Your order has been received! Total Payment: ${formattedTotalPrice}₺`
    );

  return (
    <Grid>
      <Card
        sx={{ background: "#000000", borderRadius: "20px", padding: "20px" }}
      >
        <Typography sx={{ color: "#ffffff", fontSize: 17 }}>
          Checkout
        </Typography>
        <Divider sx={{ background: "#ffffff", mt: 1, mb: 1 }} />
        <Grid sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ color: "#ffffff" }}>Total Price:</Typography>
          <Typography sx={{ color: "#66FF84", fontWeight: 800 }}>
            {formattedTotalPrice}
          </Typography>
        </Grid>
        <Grid onClick={notify} sx={{ mt: 1.5 }}>
          <EButton title="Checkout" padding="7px 2rem" />
        </Grid>
        <ToastContainer />
      </Card>
    </Grid>
  );
}

export default CheckOut;
