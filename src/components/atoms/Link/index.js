import React from "react";
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

export default Link;
