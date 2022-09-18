const initState = {
  author: "Mufli",
};

const GlobalReducer = (state = initState, action) => {
  if (action.type === "UPDATE_AUTHOR") {
    return {
      ...state,
      author: "Mr. Logitech",
    };
  }
  return state;
};

export default GlobalReducer;
