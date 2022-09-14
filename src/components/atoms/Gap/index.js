import PropTypes from "prop-types";

const Gap = ({ width, height, ...rest }) => {
  return <div {...rest} style={{ width, height }}></div>;
};

Gap.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,

};

export default Gap;
