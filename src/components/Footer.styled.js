import styled from 'styled-components';

export const MainFooter=styled.main`
    color: white;
    background-color: var(--green-40);
    border-top: 2px solid var(--green-80);
    border-bottom: 2px solid var(--green-80);
    position: fixed;
    bottom: 10px;
    width: var(--wid);
    height: 40px;
    display: flex;
    justify-content: flex-end;
    /* align-items: center; */
    padding: 5px 20px 5px 0;
    font-size: 30px;

    a {
      text-decoration: none;
      color: white;
    }
`