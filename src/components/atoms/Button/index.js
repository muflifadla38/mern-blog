import React from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
