import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { MainProjects, H1, Button, IconDown, MenuStudent, IconUp } from './Projects.styles';
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
            <MenuStudent>
                <Button>
                    {menuTrybe ?
                        <IconDown onClick={() => handleMenuTrybe() }/>
                        :
                        <IconUp onClick={() => handleMenuTrybe() }/>
                    }
                    <H1 onClick={() => handleMenuTrybe()} >Projetos Tryber</H1>
                </Button>
                {!menuTrybe && 
                    <Opcoes 
                        render={renderProjects}
                        setRender={setRenderProjects}
                        modulo={renderModulo}
                        setModulo={setRenderModulo}
                    />}
            </MenuStudent>
            <Button>
                {menuPessoal ?
                    <IconDown onClick={() => handleMenuPessoal()}/>
                    :
                    <IconUp onClick={() => handleMenuPessoal()}/>
                }
            <H1 onClick={() => handleMenuPessoal()}>Projetos pessoais</H1>
            </Button>
        </MainProjects>
                {!renderProjects && <Render modulo={renderModulo}/>}
        {/* <Footer /> */}
    </Body>
    )
}

export default Projetos;
