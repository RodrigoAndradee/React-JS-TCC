import React from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import "./BasicCard.scss";

export default function BasicCard({ cardContent, className, title }) {
  return (
    <Card title={title} className={className}>
      {cardContent}
    </Card>
  );
}

BasicCard.propTypes = {
  cardContent: PropTypes.element,
  className: PropTypes.string,
  title: PropTypes.string,
};

BasicCard.defaultProps = {
  cardContent: null,
  className: "",
  title: "",
};
