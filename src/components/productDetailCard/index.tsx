import React, { useState } from "react";
import {
  Typography,
  Card,
  Grid,
  Chip,
  Tooltip,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import EButton from "@/components/e-button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/apps/cartSlice";

interface Product {
  id: number;
  brand: string;
  model: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductDetailCard: React.FC<ProductCardProps> = ({ product }) => {
  const bigScreen = useMediaQuery("(max-width:1300px)");

  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const handleAddToFavorites = () => {
    console.log(`Added ${product.name} to favorites`);
    setFavorites(!favorites);
  };

  const limitText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <Card
      key={product.id}
      sx={{
        width: "100%",
        borderRadius: "20px",
        padding: "15px",
        background: "#000000",
        display: "flex",
        gap: 2,
        flexDirection: bigScreen ? "column" : "row",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "15px", objectFit: "cover" }}
      />
      <Grid style={{ padding: "10px" }}>
        <Typography sx={{ color: "#ffffff", fontWeight: 900 }}>
          {product.brand}
        </Typography>
        <Typography sx={{ color: "#ffffff" }}>{product.model}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          {product.name}
        </Typography>
        <Chip
          label={`$ ${product.price}`}
          sx={{ color: "#ffffff", background: "#660061", mb: 1 }}
        />
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            mb: 3,
            mt: 2,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
            onClick={handleAddToCart}
          >
            <EButton title="Add to Cart" padding="7px 2rem" />
          </Grid>
          <Grid onClick={handleAddToFavorites}>
            <Grid
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "30px",
                p: "5px 5.5px",
                border: favorites ? "1px solid red" : "1px solid rgb(6 159 36)",
                "&:hover": {
                  border: "1px solid rgb(6 159 36)",
                  backgroundColor: "#00b223",
                  color: "#ffffff",
                },
              }}
            >
              <Tooltip title="Favorites">
                <IconButton sx={{ p: 0 }}>
                  {favorites ? (
                    <FavoriteIcon
                      sx={{
                        fontSize: 30,
                        color: "red",
                        "&:hover": {
                          color: "#ffffff",
                        },
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: 30,
                        color: "#00b223",
                        "&:hover": {
                          color: "#ffffff",
                        },
                      }}
                    />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          {limitText(product.description, 600)}
        </Typography>
      </Grid>
    </Card>
  );
};

export default ProductDetailCard;
