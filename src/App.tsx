import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AppRoutes from "./routes";

const customTheme = {
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
    mono: "Montserrat, sans-serif",
  },
  weight: 400,
};

const theme = extendTheme({ customTheme });

const App = () => {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </div>
  );
};

export default App;
