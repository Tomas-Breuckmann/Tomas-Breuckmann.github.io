import React, { useState } from 'react'
import { MainHeader, MenuIcons, Fold, Unfold} from './Header.styled';
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import LateralMenu from './LateralMenu';
import Menu from './Menu';

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
                    <Unfold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                        fontSize='40px'
                    />
                    :
                    <Fold
                        onClick={ () => handleMenu()}
                        cursor='pointer'
                        fontSize='40px'
                    />
                }
            </MenuIcons>
            </MainHeader>
        </div>
    )
}

export default Header;
