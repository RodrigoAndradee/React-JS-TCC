import React from "react";

import { SOFTWARE_VERSION } from "../../constants/footerConstants";

import "./Footer.scss";

const { version: clientVersion } = require("../../../package.json");

export default function Footer() {
  const currentDate = new Date();
  const dateFormatted = `${currentDate.getUTCDate()}/${
    currentDate.getUTCMonth() + 1
  }/${currentDate.getUTCFullYear()}`;

  return (
    <div className="footer-bar">
      <div className="version-footer">
        <span>
          {SOFTWARE_VERSION.client} {clientVersion}{" "}
        </span>
        |<span> {SOFTWARE_VERSION.server} 1.2.1</span>
      </div>

      <div className="date-footer">
        <span>{dateFormatted}</span>
      </div>
    </div>
  );
}
