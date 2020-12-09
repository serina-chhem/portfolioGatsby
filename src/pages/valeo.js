import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from "../components/seo"
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';


const StyledValeo = styled.section`
   
    text-align:center;
    h6{
        margin:auto;
        font-family: 'Sacramento', cursive;
        font-weight:lighter;
        color:var(--noir);
        font-size:5rem;
        position:absolute;
        margin-left:17.3rem;
        margin-top:-1.2rem;
    }
    h5{
        /* margin:0; */
        font-family: 'Roboto', sans-serif;
        font-weight:lighter;
        color:var(--blanc);
        font-size:4rem;
    }
    p{
        color:#15181B;
        margin-top:4rem;
        line-height:2.3rem;
    }
    ul{
        margin:auto;
        list-style: none;
        font-weight:lighter;
        text-align:center;
        line-height: 2.5rem;
        font-size:1.3rem;
        color:var(--bleu-brillant)

    }

    h1{
        font-weight:normal;
        color:var(--noir);
        font-size:3rem;
    }
    h2{
        margin:4rem;
        color:var(--bleu-brillant);
        font-size:2.3rem;
        font-weight:normal;
    }
  

`

const StyledPic = styled.div`
  /* position: relative; */
  margin:2rem 0 ;
  max-width: auto;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .img {
      filter: none;
      position: relative;
      margin:auto auto;
      mix-blend-mode: normal;
      
    }
  .imgLogo {
      width:30rem;
      height:15rem;
      position: absolute;
      margin:auto auto;
      mix-blend-mode: normal;
      @media (max-width: 768px) {
        width:20rem;
        height:10rem;
      }
      @media (max-width: 368px) {
        width:5rem;
        height:3rem;
      }
    }
    .imgDashboard{
      width:auto;
      height:auto;
      border-radius:5.7rem;
      position: absolute;
      margin:auto auto;
      mix-blend-mode: normal;
    
    }

`


const Valeo = () => {

    const data = useStaticQuery(graphql`
    {
      valeoImages: allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "imagesValeoPage"}}, sort: {fields: base, order: DESC}) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }

    }
  `)
    
    return (
        
        <div className="main">
            <Header/>
            <body>
           <style>
           @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Sacramento&display=swap');
            </style>

        <SEO title="Valeo" />
            
            <StyledValeo>
                
            <StyledPic key={data.valeoImages.edges[0].node.id}>
                 <Image fluid={data.valeoImages.edges[0].node.childImageSharp.fluid} 
                 alt =  {data.valeoImages.edges[0].node.base}
                 className="imgLogo"/>
            </StyledPic>

                
                <h2>Équipementier automobile</h2>
                
                <p>Le CarLab de Valeo se repose sur le Design Thinking pour créer de nouveaux produits et services dédiées aux interfaces des véhicules du futur.  </p>
                <p>Dans ce contexte, le pôle Confort et Aide à la conduite recherche un Designer IHM pour améliorer le confort des conducteurs. </p>
                <p>Le CarLab ayant coché toutes mes cases dans ma conquête de stage, je me suis lancée dans le Design d'une interface sous forme d'écran de bord pour montrer ma volonté d'intégrer le groupe. </p>

                <h1>La mission de Valeo </h1>
                <p> « Proposer des systèmes et équipements innovants permettant la réduction des émissions de CO2 et le développement de la conduite intuitive. » </p>
               <p>En partant de cette déclaration, j'ai pu établir la manière dont je commencerai le projet en tant que UX/UI Designer.  </p>
               
               <h2>Recherche utilisateurs</h2>
                   
                <p>Après avoir contacté un membre de ma famille qui conduit fréquemment, j'ai voulu représenter les principales fonctionnalités sur l'écran de bord tactile. <br/> 
                  Le design de l'écran est donc simple et minimaliste puisque tout se passe sur la même page. En effet j'ai préféré ne pas compliquer la navigation pour les personnes qui maitrisaient peu les nouvelles technologies.</p>
                <p>
                  Ci-dessous se trouve le prototype que j'ai réalisé sur Adobe Illustrator.
                </p>
            <StyledPic key={data.valeoImages.edges[1].node.id}>
                 <Image fluid={data.valeoImages.edges[1].node.childImageSharp.fluid} 
                 alt =  {data.valeoImages.edges[1].node.base}
                 className="imgDashboard"/>
            </StyledPic>

            <p>
              L'écran de bord présente donc un GPS intégré facile d'utilisation, une zone de contact pour appeler en main-libre, et une zone pour gérer la musique. <br/> 
              J'y ai également ajouté les boutons de climatisation et un dashboard recoltant des données telles que la vitesse moyenne, le nombre de km restant jusqu'à la panne de batterie (ou d'essence) et la vitesse maximum atteinte par le conducteur.
            </p>

        <h2>Une vue d'ensemble</h2>
            <StyledPic key={data.valeoImages.edges[2].node.id}>
                 <Image fluid={data.valeoImages.edges[2].node.childImageSharp.fluid} 
                 alt =  {data.valeoImages.edges[2].node.base}
                 className="img"/>
            </StyledPic>
            
               
            </StyledValeo>
            </body>
            <Footer/>
        </div>
    )
}

export default Valeo
