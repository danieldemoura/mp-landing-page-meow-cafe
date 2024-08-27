import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background: ${(props) => props.theme.background};
    }

    .link {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 157%;

        color: ${(props) => props.theme['brand-800']};
    }

    .btn-primary {
        display: block;
        width: 100%;
        max-width: 26.3rem;
        text-align: center;

        color: #000000;
        background: #FFFFFF;
        box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25);
        border-radius: 25px;

        font-weight: 600;
        font-size: 16px;
        line-height: 157%;
        padding: 12px 0;         
    }
`