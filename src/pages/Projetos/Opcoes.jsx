// import { StyleNavLink } from '../../Styles/Helpers.styles';
import styled from 'styled-components';
// import { BsCircle } from "react-icons/bs";
import { MenuStudent } from './Projects.styles';

// const Item=styled.p`
//     color: white;
//     border-bottom: 1px solid var(--orange);
// `

const Button=styled.div`
    background-color: var(--green-40);
    /* text-align: right; */
    padding-right: 12px;
    border-radius: 12px;
    height: 24px;
    width: 200px;
    cursor: pointer;
    margin-top: 8px;
    margin-left: 52px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

function Opcoes({render, setRender, modulo, setModulo}) {

    const handleRender = (newModulo) => {    
        render && setRender(!render)
        setModulo(newModulo)
    }
    return(
        <MenuStudent>
            <Button onClick={ () => handleRender('fundamentos')}>Fundamentos</Button>
            <Button onClick={ () => handleRender('frontend')}>Front-end</Button>
            <Button onClick={ () => handleRender('backend')}>Back-end</Button>
            <Button onClick={ () => handleRender('ciencia')}>Ciência da computação</Button>
        </MenuStudent>
    )
}

export default Opcoes;
