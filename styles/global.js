import { createGlobalStyle } from "styled-components";
import { Temas } from "./themes";
export const Global = createGlobalStyle`

*{
    margin:0;
    padding:0;
    text-decoration:none;
    box-sizing:border-box;
    list-style:none;
    background-color: ${Temas.background};
}

`;
