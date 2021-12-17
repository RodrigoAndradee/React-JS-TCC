import React from "react";
import { Provider } from "react-redux";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loading from "./components/loading/Loading";
import { ConstantsProvider } from "./context/ConstantsContext";
import Routes from "./routes/Routes";

import { store } from "./store/store";

import "./styles/App.less";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConstantsProvider>
          <Loading />
          <Header />
          <Routes />
          <Footer />
        </ConstantsProvider>
      </Provider>
    </div>
  );
}

export default App;
