import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes, { arrayOf } from "prop-types";

import { StyledMenuComponent } from "./MenuComponent.styles";

function MenuComponent({
  className,
  menuOptions,
  renderMenuOptions,
  userRole,
}) {
  return (
    <StyledMenuComponent>
      {renderMenuOptions &&
        menuOptions?.map(
          ({ exact = false, icon, label, path, roles }) =>
            roles.includes(userRole) && (
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
            )
        )}
    </StyledMenuComponent>
  );
}

MenuComponent.propTypes = {
  className: PropTypes.string,
  menuOptions: arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      icon: PropTypes.element,
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  renderMenuOptions: PropTypes.bool,
  userRole: PropTypes.string,
};

MenuComponent.defaultProps = {
  className: "",
  menuOptions: {},
  renderMenuOptions: false,
  userRole: "",
};
export default MenuComponent;
