import React from "react";

import "./footer.scss";

const { version: clientVersion } = require("../../../package.json");

export default function Footer() {
  const currentdate = new Date();
  const dateFormated = `${currentdate.getUTCDate()}/${
    currentdate.getUTCMonth() + 1
  }/${currentdate.getUTCFullYear()}`;

  return (
    <div className="footer-bar">
      <div className="version-footer">
        <span>Versão Cliente {clientVersion} </span>|
        <span> Versão Servidor 1.2.1</span>
      </div>

      <div className="date-footer">
        <span>{dateFormated}</span>
      </div>
    </div>
  );
}
