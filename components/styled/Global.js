import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}
body{
    background: ${({ theme }) => theme.background} ;
    color: hsl(182, 100%, 9%);
    font-size: ${({ customFontSize }) => customFontSize};
    margin: 0:
}

`;

export default GlobalStyles;
