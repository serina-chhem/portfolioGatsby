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
        width:260px;
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
                {/* <h6>my</h6> */}
                <h5 className="canal-wrapper"> CANAL+</h5>

                <h1>Product Owner Back-Office</h1>
                {/* <h2>Comment améliorer la productivité des experts métiers via un back-office ?</h2> */}
                <p>Dans un contexte d’internationalisation de myCANAL, le groupe recherche un stagiaire product owner pour (entre autres) : </p>
                <ul>
                    <li> ▹ Recueillir les besoins des PM et des équipes métiers, </li>
                    <li> ▹ Adapter les besoins du back office pour faciliter le paramétrage effectué par les équipes métiers </li>
                    <li>▹ Spécifier et rédiger les nouvelles fonctionnalités et évolutions </li>
                    <li> ▹ Gérer le backlog et bien d’autres encore.   </li>

                </ul>

                <p>Au sein du groupe, les product owner back-office jouent un rôle d'intermédiaire entre les PM/Designers et les développeurs.
              </p>
                <p>Pour montrer ma motivation pour le poste, j’ai décidé d’imaginer une partie du projet.</p>

                <h1>Tout d'abord, c'est quoi la vision CANAL + ? </h1>
                <p>« Faire rayonner la diversité culturelle à travers le monde et créer une expérience de contenu unique.» </p>
              
              <p>Dans cette optique, il est important de proposer la meilleure expérience lorsqu'un client arrive sur une des applications en ligne du groupe, qu'il s'agisse de l'espace client, ou de la boutique.</p>
                
              
              <p>En me mettant dans la peau d'un PO Back-Office au sein de la direction TECH de Canal+, j'ai imaginé que les 
                  Products Managers et les Designers souhaitaient implémenter un chatbot dans la boutique en ligne. </p>
                  <p>
                  Alors après avoir recueilli le besoin, je procèderai à un découpage de la fonctionnalité en User Stories afin les communiquer aux développeurs. 
             </p>
            
              <h2>Découpage de la feature en User Stories</h2>

              
               
               
                <StyledPic>
                    <Img fluid={data.file.childImageSharp.fluid } alt = "CanalVisionBoard" className="img"/>
                </StyledPic>

                
            
                <h1>Perspectives</h1> 
                <p>On peut imaginer que cette US peut être livrée en un sprint d'une semaine.</p>
            </StyledCanal>
            </body>
            <Footer/>
        </div>
    )
}

export default MyCanal
