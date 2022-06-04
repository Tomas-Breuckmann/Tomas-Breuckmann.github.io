import styled from 'styled-components';

export const MainMenu=styled.div`
    display: flex;
    flex-direction: row;
    /* margin-right: 10px; */

    @media (max-width: 400px) {
        visibility: collapse;
        opacity: 0;
        transition: visibility 2s linear 300ms, opacity 300ms;
  }
`
