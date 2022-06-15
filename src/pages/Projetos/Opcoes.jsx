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
    padding-left: 12px;
    border-radius: 12px;
    height: 30px;
    /* width: 168px; */
    cursor: pointer;
    margin-top: 8px;
    margin-left: 52px;
`

function Opcoes({render, setRender, modulo, setModulo}) {

    const handleRender = (newModulo) => {    
        if (modulo === '') {
            console.log('estou no if vazio');
            setModulo(newModulo)
            setRender(!render);
        } else if (modulo === newModulo) {
            setRender(!render);
        };
        setModulo(newModulo)
    }
    return(
        <MenuStudent>
            <Button onClick={ () => handleRender('fundamentos')}>Fundamentos</Button>
            <Button onClick={ () => handleRender('frontend')}>Front-end</Button>
            <Button onClick={ () => handleRender('backend')}>Back-end</Button>
            <Button onClick={ () => handleRender('ciencia')}>Ciência da computação</Button>
            {/* <StyleNavLink to='/projetos/pixel-art' >
                <BsCircle/> Pixel Art
            </StyleNavLink>
            <Item>Frontend</Item>
            <StyleNavLink to='/projetos/sistema-solar' >
                <BsCircle/> Sistema Solar
            </StyleNavLink>
            <StyleNavLink to='/projetos/tryunfo'>
                <BsCircle/> Tryunfo
            </StyleNavLink>
            <Item>Backend</Item>
            <Item>Ciência da computação</Item> */}
        </MenuStudent>
    )
}

export default Opcoes;
