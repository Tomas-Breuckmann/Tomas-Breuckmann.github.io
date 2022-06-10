import styled from 'styled-components';
import backimage from '../images/teclado.jpg'
import { NavLink } from 'react-router-dom';

export const Body= styled.div`
width: var(--wid);
height: var(--hei);    
margin: 0 auto;
/* background-image: url(${backimage});
background-repeat: no-repeat;
background-position: bottom;
background-size: cover;
background-attachment: fixed; */
display: flex;
flex-direction: column;
/* justify-content: center; */
/* margin-top: 200px; */
`;

export const StyleNavLink = styled(NavLink)`
    font-family: 'poly';
    font-size: 1em;
    color: white;
    text-decoration: none;
    padding: 5px;
`