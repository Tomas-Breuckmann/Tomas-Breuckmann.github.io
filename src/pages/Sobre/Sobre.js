import React from 'react'
import Header from '../../components/Header';
import { Body } from '../../Styles/Helpers.styles';
import euYoga from '../../images/tomas-yoga.jpg'
import { Img, SobreMain } from './Sobre.styles';
import styled from 'styled-components'
import Techs from './Techs';
import SobreMim from './SobreMim';

const H2 = styled.h2`
    margin-top: 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--orange-40);
`

const MiniCurriculo=styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 570px) {
        flex-direction: row;
        align-items: flex-end;
        /* background-color: green; */
  }
`

function Sobre() {
    return(
        <Body>
            <Header />
            <SobreMain>
                <MiniCurriculo>
                    <Img src={ euYoga } alt="minha foto yoga" />
                    <SobreMim/>
                </MiniCurriculo>
            <Techs/>
            <H2>Formações</H2>
            <ul>
                <li>Programador Web Full Stack - Trybe - 2022</li>
                <li>Especialista em Yoga - Faculdades Integradas Espírita - 2018</li>
                <li>Especialista em Psicologia Corporal - Centro Reichiano - 2016</li>
                <li>Mestre em Matemática Aplicada - UFPR - 2004</li>
                <li>Bacharel em Matemática - UFPR - 2002</li>
            </ul>
            </SobreMain>
        </Body>
    )
}

export default Sobre;
