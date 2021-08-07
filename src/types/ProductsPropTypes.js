import PropTypes from "prop-types";

export const ProductObjectShape = PropTypes.shape({
  defaultImage: PropTypes.string,
  description: PropTypes.string,
  enabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
});
