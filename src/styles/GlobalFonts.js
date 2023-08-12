import {createGlobalStyle} from "styled-components";
import bolkit from "../assets/fonts/bolkit/bolkit.woff2";
import bolkitBold from "../assets/fonts/bolkit/bolkit-bold.woff2";

const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'Bolkit';
    font-style: normal; 
    font-weight: 400; 
    src: url("${bolkit}") format("woff2");
}
@font-face {
    font-family: 'Bolkit';
    font-style: normal;
    font-weight: 700; 
    src: url("${bolkitBold}") format("woff2");
}
h1,h2,h3,h4 {
        font-family: 'Bolkit';
      }
`;
export default GlobalFonts;