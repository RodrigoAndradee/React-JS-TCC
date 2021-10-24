import React from "react";
import { Provider } from "react-redux";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import Routes from "./routes/Routes";

import { store } from "./store/store";

import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Loading />
        <Header />
        <Routes />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
