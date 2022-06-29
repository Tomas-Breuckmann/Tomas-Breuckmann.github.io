import React from 'react'
import Header from '../../components/Header';
import { HomeMain } from './Home.styles.js';
import { Body } from '../../Styles/Helpers.styles.js';
import eu from '../../images/IMG_009.jpg'
import styled from 'styled-components'
import Medias from '../../components/Medias';

const Img=styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
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
                <Medias />                
            </HomeMain>
        </Body>
    )
}

export default Home;
