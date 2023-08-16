import React from "react";
import { Button, Container, Grid, Paper } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT } from "../redux/actions/action";

const productImageStyle = {
  maxWidth: "100%",
  height: "auto",
};

const productDetailsStyle = {
  padding: "16px",
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  console.log("product came as a props", product);
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const isProductInCart = cartItems.some((item) => item.id === product.id);
  //   const { product.title, product.description, product.price, product.image, category, rating } = product;

  const handleAddToCart = (e) => {
    if (isProductInCart) {
      //   dispatch(DLT(e));
      navigate("/cart");
    } else {
      dispatch(ADD(e));
      // You can implement your add to cart logic here
      console.log(`Added ${product.title} to cart`);
    }
  };

  return (
    <>
      <NavBar />
      <br /> <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Paper elevation={3} style={productImageStyle}>
              <img
                src={product.image}
                alt={product.title}
                style={productImageStyle}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper elevation={3} style={productDetailsStyle}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#E4135c" }}
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                {isProductInCart ? "Go to Cart" : "Add to Cart"}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <br /> <br />
      <Footer />
    </>
  );
};

export default ProductPage;
