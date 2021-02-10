import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
}
body{
    background-color:#ffffff;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    color:black;
}
html, body, #root{
    height: 100%;
}
a {
    color:inherit;
    text-decoration:none;
    cursor: pointer;
}
input, button {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
}
ol, ul, li {
    list-style:none;
}
img {
    display: block;
    width: 100%;
    height: auto;
}
`;

export default GlobalStyle;
