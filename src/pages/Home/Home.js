import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HomeMain } from './Home.styles.js';
import { Body } from '../../Styles/Helpers.styles.js';
import eu from '../../images/IMG_009.jpg'
import { Img } from '../Sobre/Sobre.styles';

function Home() {

    return(
        <Body>
            <Header nome="Home"/>
            <HomeMain>
                <Img src={ eu } alt="minha foto" />
                <h2>Tomas Breuckmann</h2>
                <h4>Desenvolvedor Web Full Stack</h4>
            </HomeMain>
            <Footer />
        </Body>
    )
}

export default Home;
