import React, { useState } from 'react'
import { MainHeader } from './Header.styled';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import LateralMenu from './LateralMenu';
// import { Body } from '../Styles/.styles';

function Header({nome}) {

    // LOCAL STATE
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return(
        <div>
            <LateralMenu menu={menu}/>
            <MainHeader>
            <p>{nome}</p>
                {
                    menu 
                    ? 
                    <AiOutlineMenuUnfold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                    />
                    :
                    <AiOutlineMenuFold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                    />
            }
            </MainHeader>
        </div>
    )
}

export default Header;
