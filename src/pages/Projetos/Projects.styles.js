import styled from 'styled-components';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const MainProjects=styled.main`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    color: white;
    line-height: 2em;
    margin: auto;
    margin-top: 100px;
    gap: 12px;

    @media (min-width: 560px) {
        flex-direction: row;
  }
`

export const H1=styled.h3`
    background-color: var(--orange-40);
    padding: 4px 24px 4px 8px;
    border-radius: 0 12px 12px 0;
    height: 40px;
    width: 168px;
    cursor: pointer;
`

export const Button=styled.div`
    display: flex;
`

export const IconDown=styled(AiFillCaretDown)`
    background-color: var(--green-40);
    height: 40px;
    width: 52px;
    padding: 8px;
    border-radius: 12px 0 0 12px;
    cursor: pointer;
`
export const IconUp=styled(AiFillCaretUp)`
    background-color: var(--green-40);
    height: 40px;
    width: 52px;
    padding: 8px;
    border-radius: 12px 0 0 12px;
    cursor: pointer;
`

export const MenuStudent=styled.div`
    display: flex;
    flex-direction: column;
`
