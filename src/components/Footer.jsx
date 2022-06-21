import React from 'react'
import { MainFooter } from './Footer.styled';
// import { Body } from '../Styles/Helpers.styles';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

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
            </MainFooter>
        </div>
    )
}

export default Header;
