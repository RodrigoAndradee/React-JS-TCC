import React from "react";
import { connect, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

import { StyledLoading } from "./Loading.styles";

function Loading() {
  const { isLoading, message = "Aguarde!", title } = useSelector(
    (state) => state.loading
  );

  return (
    <>
      {isLoading && (
        <StyledLoading className="loading-overlay">
          <div className="loading-content">
            <LoadingOutlined spin className="spin" size="large" />

            <div className="loading-description">
              {title && <p className="loading-title">{title}</p>}
              {message && <p className="loading-message">{message}</p>}
            </div>
          </div>
        </StyledLoading>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const { message, title, isLoading } = state;
  return { message, title, isLoading };
};

export default connect(mapStateToProps)(Loading);
