import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { ChakraProvider,theme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
