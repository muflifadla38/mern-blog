import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataPosts } from "../../config/Redux/Action/HomeAction";
import "./home.scss";
import Button from "../../components/atoms/Button";
import Gap from "../../components/atoms/Gap";
import { BlogItem } from "../../components";

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
            <Button type="transparent" label="Previous" onClick={previous} />
          </li>
          <li className="page-numbers active"> 1</li>
          <li className="page-numbers">2</li>
          <li className="page-numbers">3</li>
          <li className="page-numbers">4</li>
          <li className="page-numbers">5</li>
          <li className="page-numbers">6</li>
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
