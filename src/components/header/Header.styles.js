import styled from "styled-components";
import colors from "../../styles/colors";

export const StyledHeader = styled.div`
  background-color: ${colors.colorPrimary};
  display: flex;
  height: 60px;
  justify-content: center;

  .center-menu {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 1280px;

    .left-menu {
      display: flex;
      flex-direction: row;
      align-items: center;

      .main-icon {
        margin-right: 10px;
        width: 25px;
        height: 25px;
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
