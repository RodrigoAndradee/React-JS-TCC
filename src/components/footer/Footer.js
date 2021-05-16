import React from "react";

import { SOFTWARE_VERSION } from "../../constants/footerConstants";
import { generateCurrentDate } from "../../helpers/DateGeneratorHelper";

import "./Footer.scss";

const { version: clientVersion } = require("../../../package.json");

export default function Footer() {
  const currentDate = generateCurrentDate();

  return (
    <div className="footer-bar">
      <div className="version-footer">
        <span>
          {SOFTWARE_VERSION.client} {clientVersion}{" "}
        </span>
        |<span> {SOFTWARE_VERSION.server} 1.2.1</span>
      </div>

      <div className="date-footer">
        <span>{currentDate}</span>
      </div>
    </div>
  );
}
