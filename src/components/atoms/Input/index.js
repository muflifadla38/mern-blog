import PropTypes from "prop-types";
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

Input.propTypes = { label: PropTypes.string };

export default Input;
