import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./home.scss";
import Button from "../../components/atoms/Button";
import Gap from "../../components/atoms/Gap";
import { BlogItem } from "../../components";

const Home = () => {
  // Fetch API using Axios
  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        console.log("Data API: ", result.data);
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
        <BlogItem
          title="Post Pertama"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
        <BlogItem
          title="Post Kedua"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
        <BlogItem
          title="Post Ketiga"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
        <BlogItem
          title="Post Keempat"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
        <BlogItem
          title="Post Kelima"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
        <BlogItem
          title="Post Keenam"
          tag="Technology"
          author="Mufli Fadla"
          img="https://i.pravatar.cc/40?img=1"
          date="10 Sep 22"
        />
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
