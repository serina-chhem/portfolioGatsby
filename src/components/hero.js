import React from "react"
// import styles from "../styles/styles.scss"
// import Image from "../components/image"
import styled from 'styled-components'


const StyledHero = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
    h1 {
        margin: 0 0 30px 4px;
        margin-top: 20px;
        color: var(--bleu-vert);
        line-height: 1.5;
        font-size: clamp(40px, 8vw, 60px);
        font-weight: 200;
        @media (max-width: 480px) {
        margin: 0 0 20px 2px;
        }
  }
  h2 {
    margin-top: 10px;
    color: var(--bleu-vert-fonce);
    line-height: 1.8;
    font-weight: 150;

  }
  
  
`

const Hero = () => {


    return(
    
        <StyledHero>
            <h3 className="medium-heading">Bienvenue ! Je suis Sérina, </h3>
            <h1 className="big-heading">Une étudiante déterminée, adaptable et prête à créer des expériences utilisateurs uniques.</h1> 
            <h2 className="medium-heading">Si vous recherchez une stagiaire en fin d’études à Paris, en tant que UX/UI Designer, ou Product Owner, je serais ravie de vous aider à maximiser la valeur de votre produit !</h2>
           
        </StyledHero>
        
      
       
   
    )
}

export default Hero