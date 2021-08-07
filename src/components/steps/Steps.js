import React from "react";
import PropTypes from "prop-types";

import { StyledSteps } from "./Steps.styles";

function BasicSteps({ stepsContent, direction }) {
  return (
    <StyledSteps direction={direction}>
      {stepsContent.length && stepsContent.map((item) => item)}
    </StyledSteps>
  );
}

BasicSteps.propTypes = {
  stepsContent: PropTypes.arrayOf().isRequired,
  direction: PropTypes.string,
};

BasicSteps.defaultProps = {
  direction: "vertical",
};

export default BasicSteps;
