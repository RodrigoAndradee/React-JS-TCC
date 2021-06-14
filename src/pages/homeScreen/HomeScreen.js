/* eslint-disable react/prop-types */
import React from "react";
import { connect, useStore } from "react-redux";

import GenericPage from "../../components/genericPage/GenericPage";

function HomeScreen({ userInfo }) {
  console.log("userInfo: ", userInfo);
  const store = useStore();
  console.log("home screen");
  console.log(store.getState());
  return (
    <>
      <GenericPage body="Home Screen" />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    useInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(HomeScreen);
