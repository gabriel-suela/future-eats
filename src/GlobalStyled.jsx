import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    :root {
        --black: #000000;
        --greyish: #B8B8B8;
        --mid-green: #5CB646;
        --red: #e02020;
    }
`