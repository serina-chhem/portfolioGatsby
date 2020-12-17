import React, {useState} from "react"
import styled from 'styled-components'

import Typical from 'react-typical'
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from "gatsby-background-image";



const StyledHero = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
    .inner {
    padding-top:20px;

    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
    
  }

    h1 {
        margin: 0 0 30px 4px;
        margin-top: 10px;
        color: var(--bleu-vert);
        line-height: 1.5;
        font-size: 2.7rem;
        font-weight: 600;
        letter-spacing:5px;
        @media (max-width: 480px) {
        margin: 0 0 20px 2px;
        }
  }
  h2 {
    /* margin-top: 10px; */
    color: var(--bleu-vert-fonce);
    line-height: 1.8;
    font-weight: 150;
}
   
h3{
    color: var(--bleu-vert-fonce);
}

  
`



const StyledPic = styled.div`
  position: relative;
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
      width:27rem;
      height:27rem;
      
    }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
   
  }

`


const Hero = () => {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "christmasHero.svg"}) {
            extension
            id
            publicURL
            base
          }
    }
  `)

    return(



        <StyledHero >
            
            {/* <h3 className={"medium-heading"}>Bienvenue ! Je suis Sérina,</h3>   */}
            <Typical steps={['Bien', 200, 'Bienvenue !', 200, 'Bienvenue ! Je suis', 200, 'Bienvenue ! Je suis Sérina,', 200]} loop="4" wrapper="h3"/> 
           <div className="inner"> 
           
            {/* <Typical steps={['Une étudiante déterminée,', 200, 'Une étudiante déterminée, adaptable', 200, 'Une étudiante déterminée, adaptable et prête à créer des expériences utilisateurs uniques.', 200]} loop="4" wrapper="h1"/>  */}
            <h1>
                Déterminée, adaptable et prête à créer des expériences utilisateurs uniques.
            </h1>
            
            <StyledPic>
                <img className = "img" src={data.file.publicURL} alt={data.base}/>
            </StyledPic>
           
            </div>
            <h2 className="medium-heading">Si vous recherchez une stagiaire en fin d’études à Paris, en tant que UX/UI Designer, ou Product Owner, je serais ravie de vous aider à maximiser la valeur de votre produit !</h2>
            
        </StyledHero>

       
      
       
   
    )
}

export default Hero