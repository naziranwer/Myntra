import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: 400,
    height: 30,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  icon: {
    padding: theme.spacing(1, 2),
    color: theme.palette.grey[500],
  },
}));

const SearchBar = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      <SearchIcon className={classes.icon} />
      <TextField
        onChange={handleInputChange}
        className={classes.input}
        placeholder="Search..."
        // variant="outlined"
      />
    </div>
  );
};

export default SearchBar;
