import React from "react";
import { connect, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { StyledLoading } from "./Loading.styles";

function Loading() {
  const { isLoading, message, title } = useSelector((state) => state.loading);

  return (
    <>
      {isLoading && (
        <StyledLoading className="loading-overlay">
          <div className="loading-content">
            <Spin
              size="large"
              indicator={<LoadingOutlined spin className="spin" size="large" />}
              tip={
                <div className="loading-description">
                  {title && <p className="loading-title">{title}</p>}
                  {message && <p className="loading-message">{message}</p>}
                </div>
              }
            />
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
