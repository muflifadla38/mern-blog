import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import dateFormat from "dateformat";
import "./detailblog.scss";
import { Button, Gap } from "../../components";

const DetailBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [detailPost, setDetailPost] = useState({});
  const { title, body, image, author, createdAt } = detailPost;

  useEffect(() => {
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        setDetailPost(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (author) {
    return (
      <div className="detail-blog-wrapper">
        <Button type="primary" label="Back" onClick={() => navigate("/")} />
        <Gap height={"2em"} />
        <img
          src={`http://localhost:4000/${image}`}
          className="blog-image"
          alt="Thumbnail Post"
        />
        <Gap height={"1em"} />
        <h2>{title}</h2>
        <small>
          {author.name} - {dateFormat(createdAt, "dd mmm yy")}
        </small>
        <Gap height={"1em"} />
        <p>{body}</p>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default DetailBlog;
