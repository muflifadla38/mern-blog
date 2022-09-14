import "./createblog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import { LoginBg } from "../../assets";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="create-blog-wrapper">
      <Button type="primary" label="Back" onClick={() => navigate("/")} />
      <Gap height={"2em"} />
      <h3>Create New Blog Post</h3>
      <Gap height={"2em"} />
      <Input label="Title" type="text" placeholder="Title" />
      <Gap height={"1em"} />
      <Input label="Author" type="text" placeholder="Author" />
      <Gap height={"1em"} />
      <Upload src={LoginBg} label="Thumbnail" />
      <Gap height={"1em"} />
      <TextArea label="Body" placeholder="Post Body" />
      <Gap height={"2em"} />
      <Button
        type="primary"
        label="Save"
        onClick={() => navigate("/detail-blog")}
      />
    </div>
  );
};

export default CreateBlog;
