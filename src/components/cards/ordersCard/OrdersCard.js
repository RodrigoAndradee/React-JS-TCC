import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { StyledBasicOrdersCard } from "./OrdersCard.styles";

function OrdersCard({ children, footer, title, width, className }) {
  const additionalClassNames = classNames({
    "has-footer": !!footer,
  });
  return (
    <StyledBasicOrdersCard width={width} className={className}>
      <div className="card-title">{title}</div>

      <div className={`${"card-content"} ${additionalClassNames}`}>
        {children}
      </div>

      {footer && <div className="footer">{footer}</div>}
    </StyledBasicOrdersCard>
  );
}

OrdersCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  width: PropTypes.string,
};

OrdersCard.defaultProps = {
  children: null,
  className: null,
  footer: null,
  title: "",
  width: "50%",
};

export default OrdersCard;
