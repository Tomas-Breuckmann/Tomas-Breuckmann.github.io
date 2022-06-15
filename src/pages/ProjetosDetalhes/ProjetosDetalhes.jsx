import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data/data'
// import { BsCheck } from "react-icons/bs";

const P=styled.p`
    color: white;
    font-size: 1.5em;
    /* margin-bottom: 12px; */
`

const MainDetalhes=styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 50px;

    div {
        color: white;
        display: flex;
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 20px;
      background-color: var(--orange-40);
      width: 100px;
      padding: 4px 8px;
      margin-bottom: 12px;
      border-radius: 4px;
      margin-right: 12px;
    }
`

const Img=styled.img`
    width: 212px;
    height: 212px;
    margin: 12px 0 12px 0;
    border-radius: 8px;
    object-fit: cover;
`

function ProjetosDetalhes() {
    const {nome}=useParams()
    const projeto = data.filter((proj) => proj.nome === nome)
    console.log(projeto[0]);
    const { imagem, link, git } = projeto[0];
    return(
    <Body>
        <Header/>
        <MainDetalhes>
            <P>{nome.toUpperCase()}</P>
            <Img src={ imagem} alt={'ass'} />
            <div>

            <a href={link}
               target="_blank"
               rel="noopener noreferrer">Page ...
            </a>
            <a href={git}
               target="_blank"
               rel="noopener noreferrer">GitHub ...
            </a>
            </div>
            {/* <P>Habilidades desenvolvidas</P>
            {habilidades.map((hab, index) => (
                <div key={index}>
                    <BsCheck /><p>{hab}</p>
                </div>
            ))} */}
        </MainDetalhes>
        <Footer />
    </Body>
    )
}

export default ProjetosDetalhes;
