import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "axios";
import {
  setForm,
  setImgPreview,
  postToAPI,
  updateToAPI,
} from "../../config/Redux/Action";
import "./createblog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";

const CreateBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const { form, imgPreview } = useSelector((state) => state.CreateBlogReducer);
  const { title, body } = form;

  const onUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  const onSubmit = () => {
    console.log("file: ", event.target.files);
    isUpdate ? updateToAPI(form, id) : postToAPI(form);
  };

  //Update Post
  const id = useParams().id;
  useEffect(() => {
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const data = res.data.data;
          dispatch(setForm("title", data.title));
          dispatch(setForm("body", data.body));
          dispatch(setForm("image", data.image));
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
        })
        .catch((err) => console.log("err", err));
    }
  }, [id]);

  return (
    <div className="create-blog-wrapper">
      <Button type="primary" label="Back" onClick={() => navigate("/")} />
      <Gap height={"2em"} />
      <h3>{isUpdate ? "Update" : "Create New"} Post</h3>
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
        label={isUpdate ? "Update" : "Save"}
        onClick={onSubmit}
        // onClick={() => navigate("/detail-blog")}
      />
    </div>
  );
};

export default CreateBlog;
