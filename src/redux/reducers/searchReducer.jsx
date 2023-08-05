// redux/searchReducer.js

// Define the initial state
const initialState = {
  searchTerm: "",
};

// Define the searchReducer
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
