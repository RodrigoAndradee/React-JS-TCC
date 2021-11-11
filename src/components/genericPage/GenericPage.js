import React from "react";
import PropTypes from "prop-types";

import { StyledGenericPage } from "./GenericPage.styles";

function GenericPage({ className, body, toolbar }) {
  return (
    <StyledGenericPage className={className}>
      {toolbar && <div className="toolbar">{toolbar}</div>}

      <div className="content">{body}</div>
    </StyledGenericPage>
  );
}

GenericPage.propTypes = {
  className: PropTypes.string,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  toolbar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

GenericPage.defaultProps = {
  className: "",
  toolbar: null,
};

export default GenericPage;
