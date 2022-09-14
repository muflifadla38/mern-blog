import React from "react";

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper row">
      <div className="col-1">
        <p className="bold">{label}</p>
      </div>
      <div className="col">
        <textarea {...rest} />
      </div>
    </div>
  );
};

export default TextArea;
