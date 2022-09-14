import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

const Link = ({ pclass, label, url, uclass, ulabel, ...rest }) => {
  return (
    <div>
      <p className={pclass}>
        {label}
        <a href={url} className={uclass} {...rest}>
          {ulabel}
        </a>
      </p>
    </div>
  );
};

Link.propTypes = {
  pclass: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  uclass: PropTypes.string,
  ulabel: PropTypes.string,
}

export default Link;
