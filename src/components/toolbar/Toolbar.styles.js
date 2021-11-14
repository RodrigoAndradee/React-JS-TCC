import styled from "styled-components";

import { Row } from "antd";

export const StyledToolbar = styled(Row)`
  padding: 10px 0;
  width: 100%;

  .select-category {
    text-align: left;
    width: 100%;
  }

  .add-button {
    padding: 0 !important;

    .button {
      float: right;
    }
  }
`;
