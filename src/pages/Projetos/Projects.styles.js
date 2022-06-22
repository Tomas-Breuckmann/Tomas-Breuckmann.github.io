import styled from 'styled-components';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

export const MainProjects=styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: white;
    /* line-height: 2em; */
    margin-top: 60px;
    /* margin-top: 60px; */
    /* gap: 12px; */
    
    /* @media (min-width: 560px) {
        flex-direction: row;
        margin-left: 50px;
  } */
`
export const Menus=styled.div`
    display: flex;
    gap: 8px;
    margin-right: 20px;
    @media (max-width: 560px) {
        flex-direction: column;
        margin-left: 50px;
  }
`

export const H1=styled.h3`
    /* background-color: var(--orange-40); */
    border-bottom: 1px solid var(--orange-40);
    /* padding: 4px 4px 4px 50px; */
    /* border-radius: 0 12px 12px 0; */
    height: 30px;
    width: 250px;   
    cursor: pointer;
    text-align: right;
    margin-top: 12px;
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
    /* margin-top: 12px; */
`
