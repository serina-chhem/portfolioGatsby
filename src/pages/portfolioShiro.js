import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Image from "gatsby-image"
import UserResearchShiro from '../components/userResearch/userResearchShiro'
import Roles from '../components/roles/roles.js'
import Brainstorm from '../components/brainstormShiro'


const StyledShiro = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;

    h1{
        white-space: nowrap;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: rgba(27,60,170,1);
    }
    h5{
        margin: 50px;
        text-align: center;
        font-style: normal;
        font-weight: lighter;
        font-size: 45px;
        color: rgba(34,40,118,1);
    }
    h2{
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(27,60,170,1);
    }
    h4{
        white-space: nowrap;
        text-align: left;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(34,40,118,1);
        text-transform: uppercase;
    }
    h2{
        margin:30px auto;
        line-height: 20px;
        text-align: left;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: rgba(27,60,170,1);
        text-transform: uppercase;
    }
    p{
        text-align:left;
        margin-bottom:30px
    }
    
`

const StyledPic = styled.div`
   margin:50px auto;
  max-width: 900px;
  text-align:center;
  
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    
  }
  .img{
    opacity:1;
    filter: none;
    margin:auto auto;
    position: relative;
        
    }
`

const Shiro = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "googleHome.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
              } 
        }
      }
    }
  `)

    return(
        <div className="main">
            
        <Header/>

        <StyledShiro>
            <h1> PROJET SHIRO </h1>

            <h5> L’assistant vocal qui comprend les comptes-rendus post-opératoires des chirurgiens.</h5>

            {/* <p>  Dans le cadre de mon cursus scolaire, j’ai la chance de réaliser ce projet de fin d’études en équipe, initialement porté par le Centre de Recherches Interdisciplinaires de Paris. Nous nous sommes basés sur la méthode agile. */}
            {/* </p> */}
            <br/>
            
            <h1> MES RÔLES </h1>
         
            <Roles/>
            
        <StyledPic>
            <Image fluid={data.file.childImageSharp.fluid } alt = "googleHome" className="img"/>
        </StyledPic>

        <h4>LE CHALLENGE</h4>
        <h2>OPTIMISER LES COMPTES-RENDUS DES CHIRURGIENS</h2>
        <p>En ce contexte de crise sanitaire, les services de santé sont complètement bouleversé. Un an après l’apparition de la maladie infectieuse COVID-19, les hôpitaux crient à l’aide.</p>
       
        <p>Le personnel de santé est en sous-effectif et les chirurgiens sont surchargés par leur métier.</p>
        
        <p> Notre challenge est d’optimiser en temps les tâches secondaires des chirurgiens et ainsi leur permettre de passer plus de temps en salle d’opération.      </p>
      
        <h4>préparation du terrain</h4>
        <h2>notre proto-persona</h2>
        <p>L’élaboration du proto-persona est importante pour une fondation solide de notre recherche utilisateur. Le proto-persona nous sert à représenter au mieux notre utilisateur final. Nous l’avons établi en suivant trois étapes.</p>

        <h4>BRAINSTORM : QUI POURRAIT ÊTRE NOTRE PERSONA ?</h4>

        <Brainstorm/>
        <h4>LES 5 « POURQUOI ? »</h4>
        <p> Pour comprendre les motivations et besoins profonds de notre persona, nous avons imaginé ce dialogue que nous engagerions : 
        </p>



        <UserResearchShiro/>


        </StyledShiro>
       
        <Footer/>
        </div>
    )
}

export default Shiro

