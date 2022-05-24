import React from 'react'
import { MainHeader } from './Header.styled';
import { AiOutlineMenuFold } from 'react-icons/ai';
// import { Body } from '../Styles/Global.styles';

function Header() {
    return(
        <div>
            <MainHeader>
                <AiOutlineMenuFold
                    onClick={ () => console.log('icon click')}
                    cursor='pointer'
                />
            </MainHeader>
        </div>
    )
}

export default Header;
