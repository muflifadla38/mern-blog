import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import GlobalReducer from "./GlobalReducer";
import CreateBlogReducer from "./CreateBlogReducer";

const Reducer = combineReducers({
  GlobalReducer,
  HomeReducer,
  CreateBlogReducer,
});

export default Reducer;
