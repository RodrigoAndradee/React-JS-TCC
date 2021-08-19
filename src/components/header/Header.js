import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import PropTypes from "prop-types";

import BasicModal from "../modal/BasicModalForm";
import CategoryForm from "./form/CategoryForm";
import ConfirmationModal from "../modal/ConfirmationModal";
import UserForm from "./form/UserForm";

import { CreateCategory } from "../../store/actions/Categories";
import { LogOut } from "../../store/actions/SignIn";
import { CreateUser } from "../../store/actions/User";

import { ROUTES_CONSTANTS } from "../../constants/routesConstants";

import { userDataShape } from "../../types/UserDataPropTypes";

import MenuComponent from "../menuComponent/MenuComponent";

import "./Header.scss";

function Header({ userData, logOut }) {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [createUserModal, setCreateUserModal] = useState(false);
  const [confirmationModalState, setConfirmationModalState] = useState(false);

  const dispatchCreateUser = useDispatch();
  const dispatchCreateCategory = useDispatch();

  const handleLogout = () => {
    setConfirmationModalState(false);
    logOut();
  };

  const handleConfirmationCancel = () => {
    setConfirmationModalState(false);
  };

  const menuOptions = (
    <Menu style={{ width: 150 }}>
      {userData?.role === "admin" && (
        <>
          <Menu.Item onClick={() => setCreateUserModal(true)}>
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
        {(form) => <CategoryForm form={form} />}
      </BasicModal>

      <BasicModal
        handleCancel={() => setCreateUserModal(false)}
        isOpen={createUserModal}
        handleOk={(formValues) => {
          CreateUser(formValues)(dispatchCreateUser);
          setCreateUserModal(false);
        }}
        title="Adicionar Usuário"
      >
        {(form) => <UserForm form={form} />}
      </BasicModal>

      <div className="center-menu">
        <div className="left-menu">
          <MenuComponent menuOptions={ROUTES_CONSTANTS} />
        </div>

        <div className="right-menu">
          {userData && (
            <Dropdown
              overlay={menuOptions}
              className="dropdown-menu"
              placement="bottomRight"
            >
              <DownOutlined style={{ fontSize: 14 }} />
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  logOut: PropTypes.func,
  userData: userDataShape,
};

Header.defaultProps = {
  logOut: () => {},
  userData: null,
};

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(LogOut()),
  };
}

function mapStateToProps(state) {
  return { userData: state.userData };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
