import React, { useState } from 'react'
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { MainProjects, H1, Menus, MenuStudent } from './Projects.styles';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import Opcoes from './Opcoes';
import Render from './Render';

function Projetos() {
    
    // LOCAL STATE
    const [menuTrybe, setMenuTrybe] = useState(true);
    const [menuPessoal, setMenuPessoal] = useState(true);
    const [renderProjects, setRenderProjects] = useState(true);
    const [renderModulo, setRenderModulo] = useState('')

    const handleMenuTrybe = () => {
        setMenuTrybe(!menuTrybe);
    }
    const handleMenuPessoal = () => {
        setMenuPessoal(!menuPessoal);
    }

    return(
    <Body>
        <Header nome="Projetos"/>
        <MainProjects>
            <Menus>
                <MenuStudent>
                {menuTrybe ?
                    <H1 onClick={() => handleMenuTrybe()}>Projetos Tryber <AiFillCaretDown/></H1>
                    : <H1 onClick={() => handleMenuTrybe()}>Projetos Tryber <AiFillCaretUp/></H1>
                }
                    {!menuTrybe && 
                        <Opcoes 
                        render={renderProjects}
                        setRender={setRenderProjects}
                        modulo={renderModulo}
                        setModulo={setRenderModulo}
                        />
                    }
                </MenuStudent>
                {menuPessoal ? 
                    <H1 onClick={() => handleMenuPessoal()}>Projetos pessoais <AiFillCaretDown/></H1>
                    :
                    <H1 onClick={() => handleMenuPessoal()}>Projetos pessoais <AiFillCaretUp/> </H1>
                }
            </Menus>
        {!renderProjects && <Render modulo={renderModulo}/>}
        </MainProjects>
        {/* <Footer /> */}
    </Body>
    )
}

export default Projetos;
