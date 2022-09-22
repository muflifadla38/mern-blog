import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";
import "./blogItem.scss";

const BlogItem = (props) => {
  const navigate = useNavigate();

  // Destructuring props
  const { title, img, body, date, author, _id, onDelete } = props || {};

  return (
    <div className="card">
      <div
        className="card-header pointer"
        onClick={() => navigate(`/detail-blog/${_id}`)}
      >
        <img src={img} alt="card-img" className="card-image" width="600" />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span className="tag tag-blue">Technology</span>
          </div>
          <div className="col-1">
            <span
              className="tag tag-brown pointer"
              onClick={() => navigate(`/create-blog/${_id}`)}
            >
              Edit
            </span>
            <span className="tag tag-red pointer" onClick={() => onDelete(_id)}>
              Delete
            </span>
          </div>
        </div>
        <div
          className="pointer"
          onClick={() => navigate(`/detail-blog/${_id}`)}
        >
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
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
            <small>{dateFormat(date, "dd mmm yy")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
