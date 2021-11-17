/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import { StyledFilterDropdown } from "./FilterDropdown.styles";

function FilterDropdown({
  children,
  confirmText,
  // clearFilters,
  confirm,
  // selectedKeys,
  // setSelectedKeys,
}) {
  return (
    <StyledFilterDropdown>
      <span className="dropdown-content">{children}</span>

      <span className="footer">
        <Button onClick={() => confirm()} icon="search" type="primary">
          {confirmText}
        </Button>
      </span>
    </StyledFilterDropdown>
  );
}

FilterDropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  confirmText: PropTypes.string,
};

FilterDropdown.defaultProps = {
  children: null,
  confirmText: "Filtrar",
};

export default FilterDropdown;
