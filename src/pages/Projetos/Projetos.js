import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Body } from '../../Styles/Helpers.styles';
import { MainProjects, H1, Button, IconDown, MenuStudent, IconUp } from './Projects.styles';
import Opcoes from './Opcoes';

function Projetos() {
    
    // LOCAL STATE
    const [menuTrybe, setMenuTrybe] = useState(true);
    const [menuPessoal, setMenuPessoal] = useState(true);

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
                {!menuTrybe && <Opcoes />}
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
        <Footer />
    </Body>
    )
}

export default Projetos;
