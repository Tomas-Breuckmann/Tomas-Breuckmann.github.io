import { StyleNavLink } from '../../Styles/Helpers.styles';
import styled from 'styled-components';
import { BsCircle } from "react-icons/bs";
import { MenuStudent } from './Projects.styles';

const Item=styled.p`
    color: white;
    border-bottom: 1px solid var(--orange);
`

function Opcoes() {
    return(
        <MenuStudent>
            <Item>Fundamentos</Item>
            <StyleNavLink to='/projetos/pixel-art' >
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
            <Item>Ciência da computação</Item>
        </MenuStudent>
    )
}

export default Opcoes;
