import { useState } from "react";
import "./createblog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const onUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = () => {
    console.log("title: ", title);
    console.log("body: ", body);
    console.log("image: ", image);
    console.log("preview: ", imagePreview);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.post("http://localhost:4000/v1/blog/create-post", data, {
      Headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => console.log("Post success: ", res))
      .catch((err) => console.log("Err : ", err));
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
        onChange={(e) => setTitle(e.target.value)}
      />
      <Gap height={"1em"} />
      <Input label="Author" type="text" placeholder="Author" />
      <Gap height={"1em"} />
      <Upload
        img={imagePreview}
        label="Thumbnail"
        onChange={(e) => onUpload(e)}
      />
      <Gap height={"1em"} />
      <TextArea
        label="Body"
        placeholder="Post Body"
        onChange={(e) => setBody(e.target.value)}
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
