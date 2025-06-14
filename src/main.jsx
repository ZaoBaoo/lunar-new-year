import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// https://www.technodom.kz/under/lunar-new-year/
