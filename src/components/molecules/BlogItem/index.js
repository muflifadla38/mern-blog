import "./blogItem.scss";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const navigate = useNavigate();

  // Destructuring props
  const { title, img, body, date, author } = props || {};

  return (
    <div className="card pointer" onClick={() => navigate("/detail-blog")}>
      <div className="card-header">
        <img src={img} alt="card-img" className="card-image" width="600" />
      </div>
      <div className="card-body">
        <span className="tag tag-blue">Technology</span>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
      <div className="card-footer">
        <div className="user">
          <img
            src="https://i.pravatar.cc/40?img=1"
            alt="user-img"
            className="user-image"
          />
          <div className="user-info">
            <h5>{author}</h5>
            <small>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
