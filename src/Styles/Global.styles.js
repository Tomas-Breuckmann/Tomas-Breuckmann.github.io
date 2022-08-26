import { createGlobalStyle } from 'styled-components';
import poly from '../fonts/Telegraphem.otf';
import backimage from '../images/teclado.jpg'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      // ----- COLOR PALETTE ----
      --black: black;
      // ----- Gray -----
      --g1: rgba(245, 250, 247, 1);
      --g2: rgba(235, 240, 237, 1);
      --g3: rgba(220, 224, 222, 1);
      --g4: rgba(200, 204, 202, 1);
      --g5: rgba(180, 184, 182, 1);
      --g6: rgba(200, 204, 202, 1);
      --g6: rgba(160, 163, 162, 1);
      --g7: rgba(120, 122, 121, 1);
      --g8: rgba(100, 102, 101, 1);
      --g9: rgba(80, 82, 81, 1);
      --g10: rgba(60, 61, 61, 1);
      --g11: rgba(40, 41, 40, 1);
      --g12: rgba(20, 20, 20, 1);
      // ------------------------

      --green: rgb(121, 255, 0);
      --green-80: rgb(121, 255, 0, 0.8);
      --green-60: rgb(121, 255, 0, 0.6);
      --green-40: rgb(121, 255, 0, 0.4);
      --orange: rgb(255, 107, 0);
      --orange-80: rgb(255, 107, 0, 0.8);
      --orange-60: rgb(255, 107, 0, 0.6);
      --orange-40: rgb(255, 107, 0, 0.4);
      
      --wid: 100vw;      
      --hei: 100vh;
      /* background-image: url(${backimage});
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: cover;
      background-attachment: fixed; */
      background-color: var(--g3);
  }

  @font-face {
      font-family: 'poly';
      src: url(${poly}) format('opentype');
      font-weight: normal;
      font-style: normal;
    }
    
`;

