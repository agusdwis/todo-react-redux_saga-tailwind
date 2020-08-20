import React from "react";

import Home from "./pages/Home";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./styles/main.css";

export default function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.Fragment>
  );
}
