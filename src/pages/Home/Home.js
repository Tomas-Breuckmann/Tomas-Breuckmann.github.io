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
                <h4>Programador Front-End</h4>
                {/* <Links>
                <a href="https://github.com/Tomas-Breuckmann" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/tomasbreuckmann" target="_blank" rel="noopener noreferrer">
                <TiSocialLinkedinCircular />
                </a>
                <a href="https://api.whatsapp.com/send?phone=555491069882&text=Ol%C3%A1%20Tomas%2C%20eu%20me%20chamo%20" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
                </Links> */}
            </HomeMain>
            <Footer />
        </Body>
    )
}

export default Home;
