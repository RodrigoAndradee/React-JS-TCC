import * as PropTypes from "prop-types";

export const CategoryObjectShape = PropTypes.shape({
  category: PropTypes.string,
  enabled: PropTypes.bool,
  id: PropTypes.string,
});
