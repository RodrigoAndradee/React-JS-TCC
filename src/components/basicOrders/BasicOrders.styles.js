import styled from "styled-components";

export const StyledBasicOrders = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: row;

  .orders-list {
    border-radius: 5px;
    height: 100%;
    overflow-x: auto;
    width: 40%;

    .orders-list-item {
      margin-bottom: 10px;
    }
  }

  .orders-detail {
    width: 60%;
  }
`;
