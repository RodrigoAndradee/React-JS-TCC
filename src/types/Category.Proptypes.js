import * as PropTypes from "prop-types";

export const categoryObjectShape = PropTypes.shape({
  category: PropTypes.string,
  enabled: PropTypes.bool,
  id: PropTypes.string,
});
