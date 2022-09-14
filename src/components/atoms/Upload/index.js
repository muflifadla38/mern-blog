import React from "react";
import "./upload.scss";
import Gap from "../Gap";

const Upload = ({ label, src }) => {
  return (
    <div className="input-wrapper row">
      <div className="col-1">
        <p className="bold">{label}</p>
      </div>
      <div className="col">
        <img src={src} className="preview" alt="PreviewImage" />
        <Gap height={"0.5em"} />
        <input type="file" accept="images/*" />
      </div>
    </div>
  );
};

export default Upload;
