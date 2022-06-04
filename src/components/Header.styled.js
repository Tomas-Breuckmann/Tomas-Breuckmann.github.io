import styled from 'styled-components';

export const MainHeader=styled.main`
    color: white;
    background-color: var(--green-40);
    border-top: 2px solid var(--green-80);
    border-bottom: 2px solid var(--green-80);
    position: fixed;
    top: 20px;
    width: var(--wid);
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 5px 20px 5px 0;
`

export const MenuIcons=styled.div`

    @media (min-width: 400px) {
        visibility: hidden;
        opacity: 0;
        transition: visibility 2s linear 300ms, opacity 300ms;
  }
`
