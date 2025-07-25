/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Header.module.scss";
import "./styles/Footer.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
