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
  direction: PropTypes.string,
  stepsContent: PropTypes.arrayOf(PropTypes.shape({})),
};

BasicSteps.defaultProps = {
  direction: "vertical",
  stepsContent: [],
};

export default BasicSteps;
