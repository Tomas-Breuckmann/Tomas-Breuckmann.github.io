import React from 'react'
import { MainFooter } from './Footer.styled';
import { Body } from '../Styles/Global.styles';
import { AiFillGithub } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

function Header() {
    return(
        <Body>
            <MainFooter>
                <TiSocialLinkedinCircular />
                <AiFillGithub />
            </MainFooter>
        </Body>
    )
}

export default Header;
