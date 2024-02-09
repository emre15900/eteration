import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Card,
  Grid,
  Chip,
  Tooltip,
  IconButton,
} from "@mui/material";
import EButton from "@/components/e-button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addItem } from "@/store/apps/cartSlice";
import { addToFavorites, selectFavorites } from "@/store/apps/favoritesSlice";
import Link from "next/link";

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(product.id));
  }, [favorites, product.id]);

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product.id));
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
        padding: "10px 10px 3px 10px",
        background: "#000000",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "15px" }}
      />
      <Grid style={{ padding: "10px" }}>
        <Chip
          label={`$ ${product.price}`}
          sx={{ color: "#ffffff", background: "#660061", mb: 1 }}
        />
        <Typography sx={{ color: "#ffffff", fontWeight: 900 }}>
          {limitText(product.brand, 15)}
        </Typography>
        <Typography sx={{ color: "#ffffff" }}>{product.model}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#ffffff" }}>
          {limitText(product.name, 15)}
        </Typography>
        <Grid
          onClick={handleAddToCart}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mb: 1,
            mt: 1,
          }}
        >
          <EButton title="Add to Cart" padding="7px 2rem" />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Grid onClick={handleAddToFavorites}>
            <Grid
              sx={{
                backgroundColor: isFavorite ? "#ffffff" : "#66FF84",
                borderRadius: "30px",
                p: "5px 5.5px",
                border: isFavorite
                  ? "1px solid red"
                  : "1px solid rgb(6 159 36)",
                "&:hover": {
                  border: "1px solid rgb(6 159 36)",
                  backgroundColor: "#00b223",
                  color: "#ffffff",
                },
              }}
            >
              <Tooltip title="Favorites">
                <IconButton sx={{ p: 0 }}>
                  {isFavorite ? (
                    <FavoriteIcon
                      sx={{
                        fontSize: 25,
                        color: "red",
                        "&:hover": {
                          color: "#ffffff",
                        },
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: 25,
                        color: "#000000",
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
          <Link href={`/products/${product.id}`}>
            <Grid
              sx={{
                backgroundColor: "#66FF84",
                borderRadius: "30px",
                p: "5px 5.5px",
                border: "1px solid rgb(6 159 36)",
                "&:hover": {
                  backgroundColor: "#00b223",
                  color: "#ffffff",
                },
              }}
            >
              <Tooltip title="See Details">
                <IconButton sx={{ p: 0 }}>
                  <RemoveRedEyeOutlinedIcon
                    sx={{
                      fontSize: 25,
                      color: "#000000",
                      "&:hover": {
                        color: "#ffffff",
                      },
                    }}
                  />
                </IconButton>
              </Tooltip>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductCard;
