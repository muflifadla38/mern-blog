import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./home.scss";
import Button from "../../components/atoms/Button";
import Gap from "../../components/atoms/Gap";
import { BlogItem } from "../../components";

const Home = () => {
  // Init Global State posts
  const { dataPosts } = useSelector((state) => state.HomeReducer);
  const dispatch = useDispatch();

  const url = "http://localhost:4000";

  useEffect(() => {
    // Fetch API using Axios
    Axios.get(`${url}/v1/blog/posts?perPage=2`)
      .then((result) => {
        const responseAPI = result.data;

        //Dispatch to Redux
        dispatch({ type: "UPDATE_DATA_POSTS", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <Button
        type="primary"
        label="Create Post"
        onClick={() => navigate("/create-blog")}
      />

      <div className="container">
        {dataPosts.map((post) => {
          return (
            <BlogItem
              key={post._id}
              title={post.title}
              img={`${url}/${post.image}`}
              body={post.body}
              date={post.createdAt}
              author={post.author.name}
            />
          );
        })}
      </div>

      <Gap height={"1em"} />
      <div className="container">
        <ul className="page">
          <li className="page-btn">
            <Button type="transparent" label="Previous" />
          </li>
          <li className="page-numbers active"> 1</li>
          <li className="page-numbers">2</li>
          <li className="page-numbers">3</li>
          <li className="page-numbers">4</li>
          <li className="page-numbers">5</li>
          <li className="page-numbers">6</li>
          <li className="page-dots">...</li>
          <li className="page-numbers"> 10</li>
          <li className="page-btn">
            <Button type="transparent" label="Next" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
