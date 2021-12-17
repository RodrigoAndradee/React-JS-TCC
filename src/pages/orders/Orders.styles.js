import styled from "styled-components";

import { PROJECT_VARIABLES } from "../../constants/systemConstants";

import colors from "../../styles/colors";

export const StyledOrders = styled.div`
  .orders-body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${PROJECT_VARIABLES.systemWidth};

    .context-bar {
      align-items: center;
      display: flex;
      height: 50px;

      .search {
        margin-right: 8px;
        width: 30rem;
      }

      .date-picker {
        width: 20rem;
      }

      .count-down {
        align-items: center;
        border: solid 1px ${colors.colorBorderColors};
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        padding: 5px;
        width: 60px;

        .icon {
          color: ${colors.colorPrimary};
        }
      }
    }
  }
`;
