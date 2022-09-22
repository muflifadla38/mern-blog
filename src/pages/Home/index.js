import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataPosts } from "../../config/Redux/Action";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./home.scss";
import { Button, Gap, BlogItem } from "../../components";
import Axios from "axios";

const Home = () => {
  //Pagination Local state
  const [page, setPage] = useState(1);

  // Init Global State posts
  const { dataPosts, pageInfo } = useSelector((state) => state.HomeReducer);
  const dispatch = useDispatch();

  const url = "http://localhost:4000";
  useEffect(() => {
    dispatch(setDataPosts(page));
  }, [page, dispatch]);

  const previous = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const next = () => {
    setPage(page === pageInfo.total ? pageInfo.total : page + 1);
  };

  const navigate = useNavigate();

  const deletePost = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to delete post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("User agree");
            Axios.delete(`${url}/v1/blog/post/${id}`)
              .then((res) => {
                dispatch(setDataPosts(page));
                console.log("Delete post Success", res);
              })
              .catch((err) => console.log(err));
          },
        },
        {
          label: "No",
          onClick: () => console.log("User disagree"),
        },
      ],
    });
  };

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
              _id={post._id}
              onDelete={deletePost}
            />
          );
        })}
      </div>

      <Gap height={"1em"} />
      <div className="container">
        <ul className="page">
          <li className="page-btn">
            <Button type="transparent" label="Previous" onClick={previous} />
          </li>
          <li className="page-numbers active">{pageInfo.page}</li>
          <li className="page-dots">...</li>
          <li className="page-numbers">{pageInfo.total}</li>
          <li className="page-btn">
            <Button type="transparent" label="Next" onClick={next} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
