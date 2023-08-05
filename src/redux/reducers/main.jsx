import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

const rootred = combineReducers({
  cartreducer,
  productReducer,
  searchReducer,
});

export default rootred;
