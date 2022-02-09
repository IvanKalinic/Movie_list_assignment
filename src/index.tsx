import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AxiosProvider } from "./context/AxiosContext";
import { UserProvider } from "./context/UserContext";
import { MoviesProvider } from "./context/MoviesContext";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat/400.css";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

const AppContainer = styled.div`
  font-family: Montserrat;
`;

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AxiosProvider>
        <MoviesProvider>
          <QueryClientProvider client={queryClient}>
            <AppContainer>
              <ChakraProvider>
                <App />
              </ChakraProvider>
            </AppContainer>
          </QueryClientProvider>
        </MoviesProvider>
      </AxiosProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
