import PropTypes from "prop-types";

import { ProductObjectShape } from "./ProductsPropTypes";

export const stockObjectShape = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    product: ProductObjectShape,
    quantity: PropTypes.number,
    createDate: PropTypes.string,
    dueDate: PropTypes.string,
    price: PropTypes.number,
  })
);
