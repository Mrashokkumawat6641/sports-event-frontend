/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./website/styles/Header.module.scss";
import "./website/styles/Footer.module.scss";
import App from "./website/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
