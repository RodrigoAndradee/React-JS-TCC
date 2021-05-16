import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "antd";

import { PAGE_NAME } from "../../constants/uiConstants";

import "./Header.scss";

export default function Header() {
  const userCredential = JSON.parse(localStorage.getItem("userInfo"));

  const logOut = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <div className="menu-bar">
      <div className="center-menu">
        <div className="left-menu">
          {PAGE_NAME.map(
            ({ label, url, exact = false, roles }) =>
              roles.includes(userCredential.role) && (
                <NavLink
                  className="link"
                  activeClassName="-active"
                  key={url}
                  to={url}
                  exact={exact}
                >
                  {label}
                </NavLink>
              )
          )}
        </div>

        <div className="rigth-menu">
          <Button onClick={logOut}>Sair</Button>
        </div>
      </div>
    </div>
  );
}
