import React from "react";
import PropTypes from "prop-types";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import { StyledGenericPage } from "./GenericPage.styles";

function GenericPage({ body, footer, header, toolbar }) {
  return (
    <StyledGenericPage>
      <div className="header">{header}</div>

      <div className="generic-page-body">
        <div className="toolbar">{toolbar}</div>

        <div className="content">{body}</div>
      </div>

      <div className="footer">{footer}</div>
    </StyledGenericPage>
  );
}

GenericPage.propTypes = {
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  toolbar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

GenericPage.defaultProps = {
  footer: <Footer />,
  header: <Header />,
  toolbar: null,
};

export default GenericPage;
