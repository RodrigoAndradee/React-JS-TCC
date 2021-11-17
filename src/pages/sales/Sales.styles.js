import styled from "styled-components";

const filtersWidth = "240px";

export const StyledSalesToolbar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .filter-option {
    width: ${filtersWidth};
  }
`;
