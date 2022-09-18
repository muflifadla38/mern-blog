import { createStore } from "redux";

const initState = {
  dataPosts: [],
  author: "Mufli",
};

const reducer = (state = initState, action) => {
  if (action.type === "UPDATE_DATA_POSTS") {
    return {
      ...state,
      dataPosts: action.payload,
    };
  }

  if (action.type === "UPDATE_AUTHOR") {
    return {
      ...state,
      author: "Mr. Logitech",
    };
  }
  return state;
};

const Store = createStore(reducer);

export default Store;
