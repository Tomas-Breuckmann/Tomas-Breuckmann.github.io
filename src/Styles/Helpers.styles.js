import styled from 'styled-components';
import backimage from '../images/teclado.jpg'
import { NavLink } from 'react-router-dom';

export const Body= styled.div`
width: var(--wid);
height: var(--hei);    
margin: 0 auto;
background-image: url(${backimage});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const StyleNavLink = styled(NavLink)`
    font-family: 'poly';
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    padding: 5px;
`