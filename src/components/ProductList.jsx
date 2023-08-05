import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, DLT } from "../redux/actions/action";
import { fetchProducts } from "../ProductApi";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/actions/productActions";

import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);
  console.log("all products in productList", products);
  const dispatch = useDispatch();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Function to handle mouse enter on a product
  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  // Function to handle mouse leave on a product
  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  useEffect(() => {
    dispatch(fetchProductsRequest());
    fetchProducts()
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  }, [dispatch]);

  const add = (e) => {
    dispatch(ADD(e));
    console.log("item added to cart");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (products.length === 0) {
    return <h1>No products yet </h1>;
  }

  return (
    <Box sx={{ overflowY: "auto", maxHeight: "calc(100vh - 64px)" }}>
      {/* Replace "64px" with the height of your footer or other fixed components */}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px", // Adjust margin as needed
              marginTop: "10px",
            }}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Paper
              elevation={hoveredProduct === product.id ? 8 : 4}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                transform:
                  hoveredProduct === product.id ? "scale(1.02)" : "none", // Apply scaling on hover
                transition: "transform 0.3s,box-shadow 03s",
                width: "100%",
                margin: "8px",
                gap: "5px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "50%",
                  maxHeight: "70%",
                  objectFit: "cover",
                  flexGrow: 1,
                }}
              />
              <Typography
                variant="h6"
                sx={{ mt: 1, textAlign: "center", flexGrow: 1 }}
              >
                {product.title.slice(0, 13)}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Rs: {product.price}
              </Typography>
              <Button
                onClick={() => add(product)}
                variant="contained"
                color="primary"
              >
                Add to Cart
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
