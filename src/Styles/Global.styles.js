import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      --black: black;
      --green-100: rgb(121, 255, 0);
      --green-80: rgb(121, 255, 0, 0.8);
      --green-60: rgb(121, 255, 0, 0.6);
      --green-40: rgb(121, 255, 0, 0.4);
      --wid: 360px;      
      --hei: 100vh;
  }
`;

