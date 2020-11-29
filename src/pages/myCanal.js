import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';


const StyledCanal = styled.section`
   
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
    .canal-wrapper{
        background-color:var(--noir);
        text-align:center;
        margin: auto;
        width:230px;
        overflow:hidden;
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
  margin:3rem 0 ;
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

`


const MyCanal = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "whiteboardCanal.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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

        <SEO title="Canal+" />
            
            <StyledCanal>
                <h6>my</h6>
                <h5 className="canal-wrapper"> CANAL</h5>

                <h1>Product Owner Back-Office</h1>
                <h2>Comment améliorer la productivité des experts métiers via un back-office ?</h2>
                <p>Dans un contexte d’internationalisation de myCANAL, le groupe recherche un stagiaire product owner pour (entre autres) : </p>
                <ul>
                    <li> ▹ Recueillir les besoins des PM et des équipes métiers, </li>
                    <li> ▹ Adapter les besoins du back office pour faciliter le paramétrage effectué par les équipes métiers </li>
                    <li>▹ Spécifier et rédiger les nouvelles fonctionnalités et évolutions </li>
                    <li> ▹ Gérer le backlog et bien d’autres encore.   </li>

                </ul>
                <p>Pour montrer ma motivation pour le poste, j’ai décidé d’imaginer une partie du projet.</p>

                <h1>Tout d'abord, c'est quoi la vision CANAL + ? </h1>
                <p>Faire rayonner la diversité culturelle à travers le monde et créer une expérience de contenu unique. </p>
               <p>En partant de cette déclaration, j'ai pu établir un Product Vision Board pour définir ma vision d'un back-office. </p>
               
               
                <StyledPic>
                    <Img fluid={data.file.childImageSharp.fluid } alt = "CanalVisionBoard" className="img"/>
                </StyledPic>
            
                <h1>Perspectives</h1>
                <p>Pour l'instant, il ne s'agit que d'une ébauche, mais on pourrait imaginer un système de gamification/récompense pour augmenter la performance des métiers.</p>
            </StyledCanal>
            </body>
            <Footer/>
        </div>
    )
}

export default MyCanal
