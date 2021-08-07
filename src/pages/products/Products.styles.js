import styled from "styled-components";

export const StyledProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .empty-data {
    margin-top: 50px;
    justify-content: center;
  }
`;

export const StyledProductsPagination = styled.div`
  display: flex;
  justify-content: center;

  .products-body {
    width: 1280px;
  }

  .pagination-products {
    bottom: 40px;
    position: absolute;
  }
`;
