import React, { useEffect, useReducer } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import BasicCard from "../../components/basicCard/BasicCard";

import { StockActions } from "../../store/actions/Stock";

import { StockReducer } from "../../store/reducers/Stock";

import "./Stock.scss";

export default function Storage() {
  const [stockInfoData, dispatchStockInfoData] = useReducer(StockReducer);

  useEffect(() => {
    StockActions()(dispatchStockInfoData);
  }, []);
  return (
    <>
      <Header />
      STORAGE
      <Footer />
    </>
  );
}
