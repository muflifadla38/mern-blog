import Axios from "axios";

export const setDataPosts = (page) => (dispatch) => {
  // Fetch API using Axios
  Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=6`)
    .then((result) => {
      const responseAPI = result.data;

      //Dispatch to Redux
      dispatch({ type: "UPDATE_DATA_POSTS", payload: responseAPI.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          page: responseAPI.current_page,
          total: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        },
      });
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
