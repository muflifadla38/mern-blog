// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setImgPreview, postToAPI } from "../../config/Redux/Action";
import "./createblog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";

const CreateBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, imgPreview } = useSelector((state) => state.CreateBlogReducer);
  const { title, body } = form;

  const onUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  const onSubmit = () => {
    postToAPI(form);
  };

  return (
    <div className="create-blog-wrapper">
      <Button type="primary" label="Back" onClick={() => navigate("/")} />
      <Gap height={"2em"} />
      <h3>Create New Blog Post</h3>
      <Gap height={"2em"} />
      <Input
        label="Title"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => dispatch(setForm("title", e.target.value))}
      />
      <Gap height={"1em"} />
      <Input label="Author" type="text" placeholder="Author" />
      <Gap height={"1em"} />
      <Upload
        img={imgPreview}
        label="Thumbnail"
        onChange={(e) => onUpload(e)}
      />
      <Gap height={"1em"} />
      <TextArea
        label="Body"
        placeholder="Post Body"
        value={body}
        onChange={(e) => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={"2em"} />
      <Button
        type="primary"
        label="Save"
        onClick={onSubmit}
        // onClick={() => navigate("/detail-blog")}
      />
    </div>
  );
};

export default CreateBlog;
