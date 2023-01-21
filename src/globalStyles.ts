import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body{
        background-color: #0b0911;
        max-width: 1140px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0 auto;
        color: #f1f1f1;
    }
    ul,li {
        text-decoration: none;
        list-style: none;
    }
`;
