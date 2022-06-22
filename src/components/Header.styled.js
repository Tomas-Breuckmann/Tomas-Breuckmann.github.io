import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MainHeader=styled.main`
    color: white;
    position: fixed;
    top: 10px;
    width: var(--wid);
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--green-40);
    border-top: 2px solid var(--green-80);
    border-bottom: 2px solid var(--green-80);
     
    /* @media (min-width: 400px) {
        
  } */
`

export const MenuIcons=styled.div`

    @media (min-width: 400px) {
        visibility: hidden;
        opacity: 0;
        transition: visibility 2s linear 300ms, opacity 300ms;
  }
`
export const Fold=styled(AiOutlineMenuFold)`
  cursor: pointer;
  font-size: 30px;
  margin-right: 16px;
`
export const Unfold=styled(AiOutlineMenuUnfold)`
  cursor: pointer;
  font-size: 30px;
  margin-right: 16px;
`

export const Links=styled.div`
    display: flex;
    justify-content: space-evenly;
    /* background-color: red; */
    width: 120px;

`