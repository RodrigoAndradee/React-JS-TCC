import styled from "styled-components";

import { PROJECT_VARIABLES } from "../../constants/uiConstants";

import colors from "../../styles/colors";

export const StyledHeader = styled.div`
  background-color: ${colors.colorRedOrange};
  display: flex;
  height: 60px;
  justify-content: center;

  .center-menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: ${PROJECT_VARIABLES.systemWidth};

    .left-menu {
      display: flex;
      flex-direction: row;
      align-items: center;

      .barbecue-icon {
        height: 30px;
        margin-right: 5px;
        width: 30px;
      }
    }

    .right-menu {
      .user-role {
        color: ${colors.colorWhite};
        font-size: 18px;
        margin-right: 10px;
      }

      .dropdown-menu {
        color: ${colors.colorWhite};
        font-size: 20px;
      }
    }
  }
`;
