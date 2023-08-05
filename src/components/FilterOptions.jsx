import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Slider,
  Grid,
} from "@mui/material";
import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../ProductApi";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/actions/productActions";
import Footer from "./Footer";
import NavBar from "./NavBar";

const FilterOptions = () => {
  const AllProducts = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsRequest());
    fetchProducts()
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  }, [dispatch]);
  // consAllProducts = data;

  console.log("all products", AllProducts);

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [minRatings, setMinRatings] = useState(0);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedGender, setSelectedGender] = useState("all");

  // Function to handle price slider change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Function to handle ratings slider change
  const handleRatingsChange = (event, newValue) => {
    setMinRatings(newValue);
  };

  // Function to handle checkbox selection for clothing types
  const handleTypeSelection = (event) => {
    const value = event.target.value;
    setSelectedTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Function to handle checkbox selection for sizes
  const handleSizeSelection = (event) => {
    const value = event.target.value;
    setSelectedSizes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Function to handle radio button selection for gender
  const handleGenderSelection = (event) => {
    setSelectedGender(event.target.value);
  };

  console.log("all pro", AllProducts);

  const filteredProducts = AllProducts.filter((product) => {
    // Filter by price
    const price = product.price;
    if (price < priceRange[0] || price > priceRange[1]) return false;

    // Filter by ratings
    if (product.rating.rate < minRatings) return false;

    // Filter by clothing type
    if (selectedTypes.length > 0 && !selectedTypes.includes(product.category))
      return false;

    // Filter by size
    // if (selectedSizes.length > 0 && !selectedSizes.includes(product.size))
    //   return false;

    // Filter by gender preference
    if (selectedGender !== "all" && !product.category.includes(selectedGender))
      return false;

    return true;
  });
  console.log("filtered products", filteredProducts);

  return (
    <>
      <NavBar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6">Filter Options</Typography>

            {/* Price Range Slider */}
            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>Price Range:</Typography>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                max={1000}
                step={10}
              />
            </Box>

            {/* Ratings Slider */}
            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>Minimum Ratings:</Typography>
              <Slider
                value={minRatings}
                onChange={handleRatingsChange}
                valueLabelDisplay="auto"
                max={5}
                step={0.1}
              />
            </Box>

            {/* Clothing Type Checkboxes */}
            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>Products Category</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedTypes.includes("men's clothing")}
                    onChange={handleTypeSelection}
                    value="men's clothing"
                  />
                }
                label="Men"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedTypes.includes("women's clothing")}
                    onChange={handleTypeSelection}
                    value="women's clothing"
                  />
                }
                label="Women"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedTypes.includes("electronics")}
                    onChange={handleTypeSelection}
                    value="electronics"
                  />
                }
                label="Electronics"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedTypes.includes("jewelery")}
                    onChange={handleTypeSelection}
                    value="jewelery"
                  />
                }
                label="Jewelery"
              />
              {/* Add more checkboxes for different clothing types */}
            </Box>

            {/* Size Checkboxes */}

            {/* Gender Radio Buttons */}
            <Box sx={{ mt: 2 }}>
              <Typography gutterBottom>Gender Preference:</Typography>
              <RadioGroup
                value={selectedGender}
                onChange={handleGenderSelection}
                row
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="men" control={<Radio />} label="Men" />
                <FormControlLabel
                  value="women"
                  control={<Radio />}
                  label="Women"
                />
              </RadioGroup>
            </Box>
            <Typography variant="body1">
              {filteredProducts.length} products found.
            </Typography>
          </Box>
        </Grid>

        {/* Display the filtered products using the 'filteredProducts' array */}
        <Grid item xs={12} sm={8}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2}>
              <ProductCard products={filteredProducts} />
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default FilterOptions;
