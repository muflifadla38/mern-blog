import PropTypes from "prop-types";
import "./upload.scss";
import Gap from "../Gap";

const Upload = ({ label, img, ...rest }) => {
  return (
    <div className="input-wrapper row">
      <div className="col-1">
        <p className="bold">{label}</p>
      </div>
      <div className="col">
        {img && <img src={img} className="preview" alt="PreviewImage" />}
        <Gap height={"0.5em"} />
        <input type="file" accept="images/*" {...rest} />
      </div>
    </div>
  );
};

Upload.propTypes = { label: PropTypes.string, img: PropTypes.string };

export default Upload;
