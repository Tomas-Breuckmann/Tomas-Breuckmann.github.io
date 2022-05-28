import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
// import { useParams } from 'react-router-dom';

function Sobre() {
    return(
        <Body>
            <Header nome="Sobre"/>
            <Footer />
        </Body>
    )
}

export default Sobre;
