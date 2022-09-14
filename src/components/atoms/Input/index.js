import React from "react";
import "./input.scss";

const Input = ({ label, ...rest }) => {
  return (
    <div className="input-wrapper row">
      <div className="col-1">
        <p className="bold">{label}</p>
      </div>
      <div className="col">
        <input {...rest} />
      </div>
    </div>
  );
};

export default Input;
