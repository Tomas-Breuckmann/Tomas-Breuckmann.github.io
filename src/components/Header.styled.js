import styled from 'styled-components';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';

export const MainHeader=styled.main`
    color: white;
    position: fixed;
    top: 10px;
    width: var(--wid);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    @media (min-width: 400px) {
        background-color: var(--green-40);
        border-top: 2px solid var(--green-80);
        border-bottom: 2px solid var(--green-80);
        
  }
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
  font-size: 40px;
  margin-right: 16px;
`
export const Unfold=styled(AiOutlineMenuUnfold)`
  cursor: pointer;
  font-size: 40px;
  margin-right: 16px;
`