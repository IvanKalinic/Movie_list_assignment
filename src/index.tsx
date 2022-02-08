import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AxiosProvider } from "./context/AxiosContext";
import { UserProvider } from "./context/UserContext";
import { MoviesProvider } from "./context/MoviesContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AxiosProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </AxiosProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
