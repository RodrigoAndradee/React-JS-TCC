import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import BarbecueIcon from "../../assets/barbecueIcon.ico";
import BasicModal from "../modal/BasicModalForm";
import CategoryForm from "./form/CategoryForm";
import ConfirmationModal from "../modal/confirmationModal/ConfirmationModal";
import UserForm from "./form/UserForm";
import MenuComponent from "./menuComponent/MenuComponent";

import { CreateCategory } from "../../store/actions/Categories";
import { LogOut } from "../../store/actions/SignIn";
import { CreateUser } from "../../store/actions/User";

import { ROUTES_CONSTANTS } from "../../constants/routesConstants";

import { userDataShape } from "../../types/UserDataPropTypes";

import { StyledHeader } from "./Header.styles";

const { Item, Divider } = Menu;
const userRoles = {
  admin: "Administrador",
  separator: "Separador",
  stock: "Estoquista",
};

function Header({ userData, logOut }) {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const [createUserModal, setCreateUserModal] = useState(false);
  const [confirmationModalState, setConfirmationModalState] = useState(false);

  const routeHistory = useHistory();
  const dispatchCreateUser = useDispatch();
  const dispatchCreateCategory = useDispatch();

  const handleLogout = () => {
    setConfirmationModalState(false);
    logOut();
    routeHistory.push("/");
  };

  const handleConfirmationCancel = () => {
    setConfirmationModalState(false);
  };

  const menuOptions = (
    <Menu style={{ width: 150 }}>
      {userData?.role === "admin" && (
        <>
          <Item onClick={() => setCreateUserModal(true)}>
            Adicionar Usuário
          </Item>

          <Item onClick={() => setCreateCategoryModal(true)}>
            Adicionar Categoria
          </Item>
        </>
      )}
      <Divider />
      <Menu.Item onClick={() => setConfirmationModalState(true)}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <StyledHeader>
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
        handleOk={(formValues) => {
          CreateCategory(formValues)(dispatchCreateCategory);
          setCreateCategoryModal(false);
        }}
        isOpen={createCategoryModal}
        okText="Salvar"
        title="Categoria"
      >
        <CategoryForm />
      </BasicModal>

      <BasicModal
        handleCancel={() => setCreateUserModal(false)}
        handleOk={(formValues) => {
          CreateUser(formValues)(dispatchCreateUser);
          setCreateUserModal(false);
        }}
        isOpen={createUserModal}
        okText="Salvar"
        title="Adicionar Usuário"
      >
        <UserForm />
      </BasicModal>

      <div className="center-menu">
        <div className="left-menu">
          <img src={BarbecueIcon} alt="" className="barbecue-icon" />

          <MenuComponent
            menuOptions={ROUTES_CONSTANTS}
            renderMenuOptions={!!userData}
            userRole={userData?.role}
          />
        </div>
        <div className="right-menu">
          {userData && (
            <Dropdown
              overlay={menuOptions}
              className="dropdown-menu"
              placement="bottomRight"
            >
              <span>
                <span className="user-role">{userRoles[userData.role]}</span>

                <DownOutlined style={{ fontSize: 14 }} />
              </span>
            </Dropdown>
          )}
        </div>
      </div>
    </StyledHeader>
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
