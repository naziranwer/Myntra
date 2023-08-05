import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
// import { Footer } from "./Footer";
import Footer from "./Footer";

import SlidingImage from "./Slider";
import { fetchProducts } from "../ProductApi";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const searchTerm = useSelector((state) => state.searchReducer.searchTerm);
  const AllProducts = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
    fetchProducts()
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  }, [dispatch]);

  const searchedProducts = AllProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(
    "searchterm on searching",
    searchTerm,
    "search pro",
    searchedProducts
  );

  return (
    <div>
      <NavBar />
      <br />

      {!isMobile && <SlidingImage />}
      <br />

      <Grid item xs={12} sm={8}>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {searchTerm === "" ? (
              <ProductCard products={AllProducts} />
            ) : (
              <ProductCard products={searchedProducts} />
            )}
          </Grid>
        </Box>
      </Grid>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Home;
