import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Temas } from "../styles/themes";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Temas}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
