import { createStore } from "redux";

const initState = {
  state: [],
  name: "Mufli",
};

const reducer = (state = initState, action) => {
  return state;
};

const Store = createStore(reducer);

export default Store;
