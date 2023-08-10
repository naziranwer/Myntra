import React, { useState, useEffect } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { useDispatch } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     alignItems: "center",
//     width: 400,
//     height: 30,
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: theme.palette.common.white,
//     "&:hover": {
//       backgroundColor: theme.palette.grey[100],
//     },
//   },
//   input: {
//     marginLeft: theme.spacing(1),
//     flex: 1,
//   },
//   icon: {
//     padding: theme.spacing(1, 2),
//     color: theme.palette.grey[500],
//   },
// }));

const SearchBar = () => {
  // const classes = useStyles();
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
    // <div className={classes.root}>
    //   <SearchIcon className={classes.icon} />
    //   <TextField
    //     onChange={handleInputChange}
    //     className={classes.input}
    //     placeholder="Search..."
    //     // variant="outlined"
    //   />
    // </div>

    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "999px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for products,brands and more"
        inputProps={{ "aria-label": "search" }}
        onChange={handleInputChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
