import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const P=styled.p`
    color: white;
    font-size: 50px;
`

function ProjetosDetalhes() {
    const {nome}=useParams()
    return(
    <Body>
        <Header/>
        <P>{nome}</P>
        <Footer />
    </Body>
    )
}

export default ProjetosDetalhes;
