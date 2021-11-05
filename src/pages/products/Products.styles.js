import styled from "styled-components";
import { PROJECT_VARIABLES } from "../../constants/uiConstants";

export const StyledProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .empty-data {
    margin-top: 50px;
  }

  .products-body {
    width: ${PROJECT_VARIABLES.systemWidth};
  }
`;

export const StyledProductsPagination = styled.div`
  display: flex;
  justify-content: center;

  .pagination-products {
    bottom: 50px;
    position: absolute;
  }
`;
