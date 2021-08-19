import styled from "styled-components";
import { PROJECT_VARIABLES } from "../../constants/uiConstants";

export const StyledStock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  .empty-data {
    margin-top: 50px;
  }
`;

export const StyledStockPagination = styled.div`
  display: flex;
  justify-content: center;

  .stock-body {
    width: ${PROJECT_VARIABLES.systemWidth};
  }

  .pagination-stock {
    bottom: 40px;
    position: absolute;
  }
`;
