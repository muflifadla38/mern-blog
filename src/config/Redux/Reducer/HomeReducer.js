const initHomeState = {
  dataPosts: [],
  pageInfo: {
    page: 1,
    total: 0,
  },
};

const HomeReducer = (state = initHomeState, action) => {
  if (action.type === "UPDATE_DATA_POSTS") {
    return {
      ...state,
      dataPosts: action.payload,
    };
  }

  if (action.type === "UPDATE_PAGE") {
    return {
      ...state,
      pageInfo: action.payload,
    };
  }

  return state;
};

export default HomeReducer;
