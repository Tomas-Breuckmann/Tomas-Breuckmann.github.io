import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data/dataFrontend'
import { BsCheck } from "react-icons/bs";

const P=styled.p`
    color: white;
    font-size: 1.5em;
`

const MainDetalhes=styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 50px;

    p {
        color: white;
    }
`

const Img=styled.img`
    width: 60%;
`

function ProjetosDetalhes() {
    const {nome}=useParams()
    const projeto = data.filter((proj) => proj.nome === nome)
    console.log(projeto[0]);
    const { imagem, habilidades } = projeto[0];
    return(
    <Body>
        <Header/>
        <MainDetalhes>
            <P>Nome: {nome}</P>
            <Img src={ imagem} alt={'ass'} />
            <P>Habilidades desenvolvidas</P>
            {habilidades.map((hab, index) => (
                <div key={index}>
                    <p> <BsCheck />{hab}</p>
                </div>
            ))}
        </MainDetalhes>
        <Footer />
    </Body>
    )
}

export default ProjetosDetalhes;
