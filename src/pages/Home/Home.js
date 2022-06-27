import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HomeMain } from './Home.styles.js';
import { Body } from '../../Styles/Helpers.styles.js';
import eu from '../../images/IMG_009.jpg'
import styled from 'styled-components'

export const Img=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    /* margin: 12px; */
    /* border-radius: 4px; */
`
function Home() {

    return(
        <Body>
            <Header nome="Home"/>
            <HomeMain>
                <Img src={ eu } alt="minha foto" />
                <h1>Tomas Breuckmann</h1>
                <h2>Desenvolvedor Web Full Stack</h2>
                <p>Apaixonado por programar, aprender e ensinar.</p>
            </HomeMain>
            <Footer />
        </Body>
    )
}

export default Home;
