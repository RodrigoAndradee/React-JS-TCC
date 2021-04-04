import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "antd";

import pageName from "../../constants/uiConstants";

import "./header.scss";

export default function Header() {
  return (
    <div className="menu-bar">
      <div className="center-menu">
        <div className="left-menu">
          {pageName.map(({ label, url, exact = false }) => (
            <NavLink
              className="link"
              activeClassName="-active"
              key={url}
              to={url}
              exact={exact}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="rigth-menu">
          <Button>Sair</Button>
        </div>
      </div>
    </div>
  );
}
