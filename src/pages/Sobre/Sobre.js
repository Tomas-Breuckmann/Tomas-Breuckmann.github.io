import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import eu from '../../images/IMG_009.jpg'
import { Img, SobreMain } from './Sobre.styles';
// import { useParams } from 'react-router-dom';

function Sobre() {
    return(
        <Body>
            <Header />
            <SobreMain>
                <Img src={ eu } alt="minha foto" />
                <h2 >Tomas Breuckmann</h2>
                <h4>Desenvolvedor Web Full Stack</h4>
                <p>Moro em Carazinho no RS, sou casado, não tenho filhos, amo tanto gatos quanto cachorro, sou vegetariano e praticante de Vipassana. Estou em transição de carreira para a área da programação web e sou apaixonado por aprender e ensinar.</p>
            </SobreMain>
            <Footer />
        </Body>
    )
}

export default Sobre;
