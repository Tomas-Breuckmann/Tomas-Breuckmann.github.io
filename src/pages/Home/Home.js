import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HomeMain } from './Home.styles.js';
import { Body } from '../../Styles/Helpers.styles.js';

function Home() {

    return(
        <Body>
            <Header nome="Home"/>
            <HomeMain>
                <div>
                    <p>Para quando tudo der errado...</p>
                    <p>Para quando tudo der certo...</p>
                    <p>Comece novamente!</p>
                </div>
                <div>
                    <p>"Comece novamente.</p>
                    <p>Comece novamente.</p>
                    <p>Com a mente alerta e atenta.</p>
                    <p>Com a mente quieta e serena.</p>
                    <p>Faça o seu melhor.</p>
                    <p>Paciência e persistência.</p>
                    <p>Com paciência e persistência,</p>
                    <p>você será bem sucedido."</p>
                </div>
                <div>
                    <p>Inspirado nas palavras do professor Goenka. </p>
                </div>
            </HomeMain>
            <Footer />
        </Body>
    )
}

export default Home;
