import React from "react";

import { SOFTWARE_VERSION } from "../../constants/footerConstants";
import { generateCurrentDate } from "../../helpers/DateGeneratorHelper";

import { StyledFooterComponent } from "./Footer.styles";

const { version: clientVersion } = require("../../../package.json");

export default function Footer() {
  const currentDate = generateCurrentDate();

  return (
    <StyledFooterComponent>
      <div>
        <span>
          {SOFTWARE_VERSION.client} {clientVersion}{" "}
        </span>
        |<span> {SOFTWARE_VERSION.server} 1.2.1</span>
      </div>

      <span>{currentDate}</span>
    </StyledFooterComponent>
  );
}
