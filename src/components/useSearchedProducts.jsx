// useSearchedProducts.js (Custom Hook)
import { useState, useMemo } from "react";

import data from "../data";

const useSearchedProducts = (searchTerm) => {
  const [searchedTerm, setSearchedTerm] = useState(searchTerm);
  const Allproducts = data;

  // Compute the searchedProducts array using useMemo to avoid re-computation on every render
  const searchedProducts = useMemo(() => {
    return Allproducts.filter((product) =>
      product.title.toLowerCase().includes(searchedTerm.toLowerCase())
    );
  }, [Allproducts, searchedTerm]);

  console.log("custom hook rendered", searchedProducts);

  // Return the searchedProducts array and the setSearchTerm function to update it
  return [searchedProducts, setSearchedTerm];
};

export default useSearchedProducts;
