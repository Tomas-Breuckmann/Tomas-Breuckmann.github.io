import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import eu from '../../images/IMG_009.jpg'
import { Img, HomeMain, StyleNavLink, Menu } from './Home.styles.js';

function Home() {
    return(
        <div>
            <Header />
            <HomeMain>
                <Img src={ eu } alt="minha foto" />
                <h2>Tomas Breuckmann</h2>
                <h4>Desenvolvedor Web Full Stack</h4>
            </HomeMain>
            <Menu>
                <StyleNavLink to={ '/projetos'}>
                    PROJETOS
                </StyleNavLink>
                <StyleNavLink to={ '/sobre'}>
                    SOBRE
                </StyleNavLink>
                <StyleNavLink to={ '/contato'}>
                    CONTATOS
                </StyleNavLink>
            </Menu>
            <Footer />
        </div>
    )
}

export default Home;
