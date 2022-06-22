import React from 'react'
import { MainFooter } from './Footer.styled';
// import { Body } from '../Styles/Helpers.styles';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaWhatsapp } from 'react-icons/fa'

function Header() {
    return(
        <div>
            <MainFooter>
            <a href="https://www.linkedin.com/in/tomasbreuckmann" target="_blank" rel="noopener noreferrer">
                <TiSocialLinkedinCircular />
            </a>
            <a href="https://github.com/Tomas-Breuckmann" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
            </a>
            <a href="https://api.whatsapp.com/send?phone=555491069882&text=Ol%C3%A1%20Tomas%2C%20eu%20me%20chamo%20" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </MainFooter>
        </div>
    )
}

export default Header;
