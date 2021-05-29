import React from "react";
import { NavLink } from "react-router-dom";

import { Dropdown, Menu, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { PAGE_NAME } from "../../constants/uiConstants";

import "./Header.scss";

function Header() {
  const userCredential = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const logOut = () => {
    Modal.confirm({
      title: "Certeza que deseja sair?",
      icon: null,
      content: null,
      okText: "Sair",
      cancelText: "Cancelar",
      onOk: () => {
        handleLogout();
      },
    });
  };

  const menuOptions = (
    <Menu style={{ width: 150 }}>
      {userCredential.role === "admin" && (
        <Menu.Item>Adicionar Usuário</Menu.Item>
      )}

      <Menu.Item onClick={logOut}>Sair</Menu.Item>
    </Menu>
  );

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

        <div className="right-menu">
          <Dropdown
            overlay={menuOptions}
            className="dropdown-menu"
            placement="bottomRight"
          >
            <DownOutlined style={{ fontSize: 14 }} />
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
