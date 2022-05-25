import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Img=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    margin: 12px
`

export const HomeMain=styled.main`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    line-height: 1.6em;
`

export const StyleNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 5px;
`
export const Menu=styled.main`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
