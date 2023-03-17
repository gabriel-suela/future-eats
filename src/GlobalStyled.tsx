import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    body {
        font-family: 'Roboto';
    }

    :root {
        --black: #000000;
        --greyish: #b8b8b8b8;
        --mid-green: #5cb646;
    }

`;
