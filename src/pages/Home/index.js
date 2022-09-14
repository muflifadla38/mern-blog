import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./home.scss";
import Button from "../../components/atoms/Button";
import Gap from "../../components/atoms/Gap";
import { BlogItem } from "../../components";

const Home = () => {
  //Init useState posts
  const [dataPost, setDataPost] = useState([]);
  const url = "http://localhost:4000";

  useEffect(() => {
    // Fetch API using Axios
    Axios.get(`${url}/v1/blog/posts?page=1`)
      .then((result) => {
        const responseAPI = result.data;
        
        //Set datapost value to ResponseAPI
        setDataPost(responseAPI.data);
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
        {dataPost.map((post) => {
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
