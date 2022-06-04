import styled from 'styled-components';

export const Container=styled.div`
    /* background-color: blue; */
    /* width: var(--wid); */
    display: flex;
    justify-content: right;
    position: fixed;
    right: 0px;
    top:80px;
`

export const Menu=styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    line-height: 1.6em;
    background-color: var(--orange-60);
    color: ${props => props.menu };
    width: 120px;
    z-index: 10000;
    padding: 40px 10px;
    border-radius: 12px 0 0 12px;
    visibility: ${props => props.menu ? "visible" : "hidden"};
`