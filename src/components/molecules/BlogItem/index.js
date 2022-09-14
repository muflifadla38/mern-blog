import React from "react";
import "./blogItem.scss";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ title, tag, author, img, date }) => {
  const navigate = useNavigate();

  return (
    <div className="card pointer" onClick={() => navigate("/detail-blog")}>
      <div className="card-header">
        <img
          src="https://source.unsplash.com/600x400/?computer"
          alt="card-img"
          className="card-image"
          width="600"
        />
      </div>
      <div className="card-body">
        <span className="tag tag-blue">{tag}</span>
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </p>
      </div>
      <div className="card-footer">
        <div className="user">
          <img src={img} alt="user-img" className="user-image" />
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
