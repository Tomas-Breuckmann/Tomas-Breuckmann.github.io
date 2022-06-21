import styled from 'styled-components';

export const Container=styled.div`
    display: flex;
    position: fixed;
    right: ${props => props.menu ? `0px` : '-120px'};
    /* right: 50px; */
    top: 60px;
    color: ${props => props.menu ? `blue` : 'red'};
    transition: right 0.3s linear 300ms, opacity 300ms;
`

export const Menu=styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    line-height: 1.6em;
    background-color: var(--orange-60);
    width: 120px;
    z-index: 10000;
    padding: 30px 10px;
    border-radius: 12px 0 0 12px;
`