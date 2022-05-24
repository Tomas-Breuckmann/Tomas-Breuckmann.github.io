import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import backimage from '../images/teclado.jpg'

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
      /* background-color: var(--black); */
      --wid: 360px;      
  }
`;

export const Body= styled.div`
  width: var(--wid);
  height: 640px;    
  margin: 0 auto;
  background-image: url(${backimage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

