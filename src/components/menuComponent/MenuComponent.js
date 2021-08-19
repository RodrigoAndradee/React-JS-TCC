import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes, { arrayOf } from "prop-types";

import { StyledMenuComponent } from "./MenuComponent.styles";

function MenuComponent({ className, menuOptions }) {
  return (
    <StyledMenuComponent>
      {menuOptions?.map(({ exact = false, icon, label, path }) => (
        <NavLink
          activeClassName="active"
          className={`link ${className}`}
          exact={exact}
          key={path}
          to={path}
        >
          {icon && <span className="menu-icon">{icon}</span>}
          {label}
        </NavLink>
      ))}
    </StyledMenuComponent>
  );
}

MenuComponent.propTypes = {
  menuOptions: arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      icon: PropTypes.element,
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  className: PropTypes.string,
};

MenuComponent.defaultProps = {
  className: "",
  menuOptions: {},
};
export default MenuComponent;
