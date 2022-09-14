import React from "react";
import "./button.scss";

const Button = ({ label, type, ...rest }) => {
  return (
    <div className="btn-wrapper">
      <button {...rest} className={"btn btn-" + type}>
        {label}
      </button>
    </div>
  );
};

export default Button;
