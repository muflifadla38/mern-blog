import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import GlobalReducer from "./GlobalReducer";

const Reducer = combineReducers({ GlobalReducer, HomeReducer });

export default Reducer;
