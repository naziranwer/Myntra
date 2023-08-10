import React, { useState, useEffect } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_TERM", payload: searchTerm });
  }, [dispatch, searchTerm]);

  console.log("search bar renders");

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "9px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for products,brands and more"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInputChange}
      />
    </Paper>
  );
};

export default SearchBar;
