import Axios from "axios";

export const setDataPosts = () => (dispatch) => {
  // Fetch API using Axios
  Axios.get("http://localhost:4000/v1/blog/posts?perPage=2")
    .then((result) => {
      const responseAPI = result.data;

      //Dispatch to Redux
      dispatch({ type: "UPDATE_DATA_POSTS", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};
