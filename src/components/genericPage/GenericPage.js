import React from "react";
import PropTypes from "prop-types";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./GenericPage.scss";

function GenericPage({ body, footer, header, toolbar }) {
  return (
    <div className="generic-page">
      <div className="header">{header}</div>

      <div className="toolbar">{toolbar}</div>

      <div className="body">{body}</div>

      <div className="footer">{footer}</div>
    </div>
  );
}

GenericPage.propTypes = {
  body: PropTypes.element.isRequired,
  footer: PropTypes.element,
  header: PropTypes.element,
  toolbar: PropTypes.element,
};

GenericPage.defaultProps = {
  footer: <Footer />,
  header: <Header />,
  toolbar: null,
};

export default GenericPage;