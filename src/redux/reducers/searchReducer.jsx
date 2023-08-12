// redux/searchReducer.js

const initialState = {
  searchTerm: "",
};

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
