import * as PropTypes from "prop-types";

const productObjectShape = PropTypes.shape({
  defaultImage: PropTypes.string.isRequired,
  description: PropTypes.string,
  enabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  type: PropTypes.string,
});
