import { Container, Menu } from './LateralMenu.styled.js';
import { StyleNavLink } from '../pages/Home/Home.styles.js';

export default function LateralMenu({menu}) {
    console.log(menu);
    return(
        <Container>
            <Menu menu={menu}>
                <StyleNavLink to={ '/'}>
                    HOME
                </StyleNavLink>
                <StyleNavLink to={ '/sobre'}>
                    SOBRE
                </StyleNavLink>
                <StyleNavLink to={ '/projetos'}>
                    PROJETOS
                </StyleNavLink>
                <StyleNavLink to={ '/contato'}>
                    CONTATOS
                </StyleNavLink>
            </Menu>
        </Container>
    )
}