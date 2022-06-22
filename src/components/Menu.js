import { StyleNavLink } from '../Styles/Helpers.styles';
import { MainMenu } from './Menu.styled';

export default function Menu() {
    return(
        <MainMenu>
            <StyleNavLink to={ '/'}>
                HOME
            </StyleNavLink>
            <StyleNavLink to={ '/sobre'}>
                SOBRE
            </StyleNavLink>
            <StyleNavLink to={ '/projetos'}>
                PROJETOS
            </StyleNavLink>
        </MainMenu>
    )
}