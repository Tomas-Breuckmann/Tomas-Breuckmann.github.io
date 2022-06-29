import styled from 'styled-components';

export const MainMenu=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* width: 500px; */
    /* height: 40px; */
    /* margin-right: 10px; */
    /* background-color: red; */
    margin-left: 20px;
    margin-top: 4px;

    @media (max-width: 400px) {
        visibility: hidden;
        opacity: 0;
        /* transition: visibility 2s linear 300ms, opacity 300ms; */
  }
`
