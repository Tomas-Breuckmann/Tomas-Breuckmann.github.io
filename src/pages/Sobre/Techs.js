import styled from 'styled-components';

const MainTechs=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

    img {
        height: 28px;
    }
`

const H2 = styled.h2`
    margin-top: 12px;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--orange-40);
`

export default function Techs() {
    return(
        <>
        <H2>Tecnologias</H2>
        <MainTechs>
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3"/>
                <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript"/>
                <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-components"/>
                <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt=""react/>
                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node"/>
                <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="sql"/>
        </MainTechs>
        </>
    )
};
