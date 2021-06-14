import * as PropTypes from "prop-types";

import { productObjectShape } from "./ProductsProptypes";

export const stockObjectShape = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    product: productObjectShape,
    quantity: PropTypes.number,
    createDate: PropTypes.string,
    dueDate: PropTypes.string,
    price: PropTypes.number,
  })
);
