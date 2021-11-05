import styled from "styled-components";
import { PROJECT_VARIABLES } from "../../constants/uiConstants";

export const StyledStock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .empty-data {
    margin-top: 50px;
  }

  .stock-body {
    width: ${PROJECT_VARIABLES.systemWidth};
  }
`;

export const StyledStockPagination = styled.div`
  display: flex;
  justify-content: center;

  .pagination-stock {
    bottom: 50px;
    position: absolute;
  }
`;
