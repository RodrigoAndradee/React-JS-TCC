import * as PropTypes from "prop-types";

export const OrderObjectShape = PropTypes.shape({
  id: PropTypes.string,
  address: PropTypes.shape({
    address: PropTypes.string,
    complement: PropTypes.string,
    number: PropTypes.number,
    zipCode: PropTypes.string,
  }),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ),
  userId: PropTypes.string,
  orderNumber: PropTypes.number,
});
