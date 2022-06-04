import React, { useState } from 'react'
import { MainHeader, MenuIcons} from './Header.styled';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import LateralMenu from './LateralMenu';
import Menu from './Menu';
// import { Body } from '../Styles/.styles';

// function Header({nome}) {
    function Header() {

    // LOCAL STATE
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return(
        <div>
            <LateralMenu menu={menu}/>
            <MainHeader>
            <Menu />
            <MenuIcons>
                {
                    menu 
                    ? 
                    <AiOutlineMenuUnfold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                        fontSize='30px'
                    />
                    :
                    <AiOutlineMenuFold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                        fontSize='30px'
                    />
                }
            </MenuIcons>
            </MainHeader>
        </div>
    )
}

export default Header;
