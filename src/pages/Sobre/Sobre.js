import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import euYoga from '../../images/tomas-yoga.jpg'
import { Img, SobreMain } from './Sobre.styles';
import styled from 'styled-components'

const Techs = styled.section`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;

    img {
        height: 30px;
        /* background-color: red; */
        /* width: 200px; */
    }
`;

const H2 = styled.h2`
    margin-top: 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--orange-40);
`

function Sobre() {
    return(
        <Body>
            <Header />
            <SobreMain>
                <Img src={ euYoga } alt="minha foto yoga" />
                <h1>Tomas Breuckmann</h1>
                <H2>Tecnologias</H2>
            <Techs>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript"/>
                <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components"/>
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""react/>
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node"/>
                <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="sql"/>
            </Techs>
            <H2>Formações</H2>
            <ul>
                <li>Programador Web Full Stack - Trybe - 2022</li>
                <li>Especialista em Yoga - Faculdades Integradas Espírita - 2018</li>
                <li>Especialista em Psicologia Corporal - Centro Reichiano - 2016</li>
                <li>Mestre em Matemática Aplicada - UFPR - 2004</li>
                <li>Bacharel em Matemática - UFPR - 2002</li>
            </ul>
            </SobreMain>
            {/* <Footer /> */}
        </Body>
    )
}

export default Sobre;
