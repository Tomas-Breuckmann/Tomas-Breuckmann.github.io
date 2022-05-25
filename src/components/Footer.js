import React from 'react'
import { MainFooter } from './Footer.styled';
// import { Body } from '../Styles/Helpers.styles';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Header() {
    return(
        <div>
            <MainFooter>
                <TiSocialLinkedinCircular />
                <AiFillGithub />
            </MainFooter>
        </div>
    )
}

export default Header;
