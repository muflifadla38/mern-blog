const initHomeState = {
  dataPosts: [],
};

const HomeReducer = (state = initHomeState, action) => {
  if (action.type === "UPDATE_DATA_POSTS") {
    return {
      ...state,
      dataPosts: action.payload,
    };
  }

  return state;
};


export default HomeReducer;