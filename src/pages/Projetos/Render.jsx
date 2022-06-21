import data from '../../data/data'
import styled from 'styled-components';

const P=styled.p`
    color: white;
    font-size: 1.2em;
    /* margin-bottom: 12px; */
`

const MainDetalhes=styled.main`
    display: flex;
    flex-direction: column;
    /* background-color: var(--green-40); */
    border: 1px solid var(--green-40);
    border-radius: 4px;
    padding: 4px;
    /* align-items: center; */
    /* margin-top: 100px; */
    /* margin-left: 50px; */

    div {
        color: white;
        display: flex;
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 20px;
      background-color: var(--orange-40);
      width: 100px;
      padding: 4px 8px;
      margin-bottom: 12px;
      border-radius: 4px;
      margin-right: 12px;
    }
`

const Img=styled.img`
    width: 340px;
    height: 212px;
    margin: 12px 0 12px 0;
    border-radius: 8px;
    object-fit: cover;
`

const MainRender=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: 12px
`

function Render({modulo}) {

    const projectsToRender = data.filter((project) => project.modulo === modulo)

    return(
        <MainRender>
            {
                projectsToRender.map(({nome, imagem, link, git}) => (
                    <MainDetalhes key={nome}>
                        <P>{nome.toUpperCase()}</P>
                        <Img src={ imagem} alt={'ass'} />
                        <div>
                            <a href={link}
                            target="_blank"
                            rel="noopener noreferrer">Page ...
                            </a>
                            <a href={git}
                            target="_blank"
                            rel="noopener noreferrer">GitHub ...
                            </a>
                        </div>
                </MainDetalhes>
                ))
            }
        </MainRender>
    )
}

export default Render;
