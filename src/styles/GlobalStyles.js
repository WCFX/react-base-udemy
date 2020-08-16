import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  :root {
    --color-primary: #0d2f81;
    --color-secondary: #ffe7aa;
    --color-white: #fff;
    --color-black: #000;
    --color-blue: #0061ff;
    --color-border: #bdc4c9;
  } 


`;

