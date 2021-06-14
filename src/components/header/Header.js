import React, { useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import BasicModal from "../basicModal/BasicModal";
import ConfirmationModal from "../basicModal/ConfirmationModal";
import CategoryForm from "./form/CategoryForm";

import { CreateCategory } from "../../store/actions/Categories";
import { CategoriesReducer } from "../../store/reducers/Categories";

import { PAGE_NAME } from "../../constants/uiConstants";

import "./Header.scss";
import { LOG_OUT } from "../../store/ActionTypes";

function Header() {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [confirmationModalState, setConfirmationModalState] = useState(false);
  const [selectedCategoryTab, setSelectedCategoryTab] = useState(
    "createCategory"
  );

  const dispatch = useDispatch();
  const [createCategory, dispatchCreateCategory] = useReducer(
    CategoriesReducer
  );

  const userCredential = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  const handleConfirmationCancel = () => {
    setConfirmationModalState(false);
  };

  const menuOptions = (
    <Menu style={{ width: 150 }}>
      {userCredential.role === "admin" && (
        <>
          <Menu.Item onClick={() => console.log("Adicionar Usuário")}>
            Adicionar Usuário
          </Menu.Item>

          <Menu.Item onClick={() => setCreateCategoryModal(true)}>
            Adicionar Categoria
          </Menu.Item>
        </>
      )}

      <Menu.Item onClick={() => setConfirmationModalState(true)}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="menu-bar">
      <ConfirmationModal
        cancelText="Cancelar"
        handleCancel={handleConfirmationCancel}
        handleOk={handleLogout}
        isOpen={confirmationModalState}
        okText="Sair"
      >
        Tem certeza que deseja sair?
      </ConfirmationModal>

      <BasicModal
        handleCancel={() => setCreateCategoryModal(false)}
        isOpen={createCategoryModal}
        handleOk={(formValues) => {
          CreateCategory(formValues)(dispatchCreateCategory);
          setCreateCategoryModal(false);
        }}
        title="Categoria"
      >
        {(form) => (
          <CategoryForm form={form} setSelectedTab={setSelectedCategoryTab} />
        )}
      </BasicModal>

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
