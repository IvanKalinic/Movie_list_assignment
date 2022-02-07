import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AxiosProvider } from "./context/AxiosContext";

ReactDOM.render(
  <React.StrictMode>
    <AxiosProvider>
      <App />
    </AxiosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
