import styled from "styled-components";

import colors from "../../../styles/colors";

export const StyledFilterDropdown = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;

  .dropdown-content {
    padding: 10px;
    border-radius: 50px;
  }

  .footer {
    padding: 10px;
    margin-top: 10px;
    border-top: solid 1px ${colors.colorDarkGray};
  }
`;
