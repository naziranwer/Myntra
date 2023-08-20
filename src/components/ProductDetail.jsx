import React from "react";
import { Button, Container, Grid, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT } from "../redux/actions/action";

const productImageStyle = {
  maxWidth: "100%",
  height: "auto",
  // backgroundColor: "grey",
};

const productDetailsStyle = {
  padding: "30px",
  marginRight: "400px",
};
const ratingBoxStyle = {
  border: "1px solid #ccc",
  width: "200px",
  height: "20px",
  padding: "4px",
  borderRadius: "1px",
  // marginTop: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const starIconStyle = {
  // backgroundColor: "#097969",
  color: "#097969", // Green color for stars
  marginRight: "4px",
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

  const productImageZoomStyle = {
    maxWidth: "100%",
    height: "auto",
    transition: "transform 0.3s", // Add a transition for smooth animation
  };

  const circleButtonStyles = {
    width: "50px",
    height: "50px",
    backgroundColor: "#fff",
    border: "1px solid #bfc0c6",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "border-color 0.3s",
  };

  const handleImageHover = (e) => {
    e.currentTarget.style.transform = "scale(1.1)"; // Scale up the image on hover
  };

  const handleImageLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)"; // Reset the scale on hover exit
  };

  return (
    <>
      <NavBar />
      <br /> <br />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <Paper style={productImageStyle}>
              <img
                src={product.image}
                alt={product.title}
                style={productImageZoomStyle}
                onMouseEnter={handleImageHover} // Apply zoom on hover
                onMouseLeave={handleImageLeave}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper
              style={{
                productDetailsStyle,
                marginLeft: "50px",
                boxShadow: "none",
              }}
            >
              <h2>{product.title}</h2>
              <div style={ratingBoxStyle}>
                {/* Display stars */}
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    {product.rating.rate}
                  </span>{" "}
                  <span style={starIconStyle}>
                    <StarIcon style={{ marginBottom: "-5px" }} />
                  </span>
                  {"| "} {product.rating.count} Ratings
                </p>
              </div>

              <p>{product.description}</p>
              <p style={{ fontWeight: "bold" }}>
                <span style={{ fontSize: "20px" }}>
                  Price: ${product.price}
                </span>{" "}
                <span style={{ color: "#ff905a" }}>(40 % OFF)</span>
              </p>
              <p style={{ fontWeight: "bold", color: "#03a685" }}>
                inclusive of all taxes
              </p>
              <p style={{ fontWeight: "bold" }}>SELECT SIZE</p>
              <div style={{ display: "flex", gap: "5px" }}>
                <div style={circleButtonStyles}>S</div>
                <div style={circleButtonStyles}>M</div>
                <div style={circleButtonStyles}>L</div>
                <div style={circleButtonStyles}>XL</div>
                <div style={circleButtonStyles}>XXL</div>
              </div>
              <br />
              <Button
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: "#FF3E6C",
                  width: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "10px",
                }}
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isProductInCart ? (
                    <>
                      <span>go to bag</span>
                      <ArrowForwardIcon style={{ marginLeft: "5px" }} />
                    </>
                  ) : (
                    <>
                      <ShoppingBagIcon
                        style={{ marginBottom: "6px", marginRight: "5px" }}
                      />
                      <span>Add to bag</span>
                    </>
                  )}
                </span>
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
