import styled from 'styled-components';
import backimage from '../images/teclado.jpg'

export const Body= styled.div`
width: var(--wid);
height: var(--hei);    
margin: 0 auto;
background-image: url(${backimage});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`;