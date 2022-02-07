import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AxiosProvider } from "./context/AxiosContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AxiosProvider>
        <App />
      </AxiosProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
