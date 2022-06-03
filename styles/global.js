import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

export const Global = createGlobalStyle`

  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${themes.background};
    color: #fff;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  html {
    font-size: 62.5%;
  }

`;
