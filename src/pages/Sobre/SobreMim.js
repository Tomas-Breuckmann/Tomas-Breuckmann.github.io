import styled from 'styled-components';

const Main = styled.main`
    margin-bottom: 8px;
    /* background-color: yellow; */
    /* width: 100%; */

    p {
        /* color: black; */
        font-size: 0.8em;
        padding-right: 0;
        width: 100%;
    }
`

export default function SobreMim() {
    return(
        <Main>
            <h2>Tomas Breuckmann</h2>
            <h3>Apaixonado por programar, aprender e ensinar.</h3> 
            <p>
            Atualmente estou em transição de carreira. Sou estudante de desenvolvimento web Full Stack pela Trybe e desenvolvedor Frontend formado pela mesma escola, onde me tornei um entusiasta por React, Javascript e Styled-Components. Nas minhas formações como Bacharel em Matemática e Mestre em Matemática Aplicada tive meu primeiro contato mais sério com a programação em Pascal e Matlab.
            </p>
            <p>
            Acredito o que ser humano vive melhor quando está em conexão com a espiritualidade, que sua natureza real é muito maior do que aparenta ou se mostra. Acredito que valores como colaboração e trabalho em equipe são fundamentais para o crescimento a longo prazo. Minha busca por conhecer a mim mesmo e por entender mais a mente me levou a fazer especializações em Psicologia Corporal e Yoga. 
            </p>
            <p>
            Meu objetivo é atuar na área de Tecnologia que envolva uma Liderança Humanizada, em um local onde possa aprender e ensinar continuamente. Almejo mentorear novos desenvolvedores, pois acredito que posso contribuir com minha experiência nas mais diversas áreas para que os mais novos adquiram muito mais do que conhecimentos técnicos.
            </p>
            <p>
            Moro em Carazinho no RS, sou casado, amante de cães e gatos, vegetariano e praticante de Vipassana. Gosto de ouvir Heavy Metal "das antigas" e de ler sobre diversos temas.
            </p>
        </Main>
    )
}