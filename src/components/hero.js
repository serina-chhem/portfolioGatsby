import React from "react"
// import styles from "../styles/styles.scss"
import {graphql, useStaticQuery} from "gatsby"
import Image from "../components/image"
import styled from 'styled-components'


const query = graphql`
{
  file(relativePath: {eq: "gatsby-icon.png"}) {
    childImageSharp {
      fluid {
        src
      }
    }
  }
}
`

const StyledHero = styled.section`
    flex-direction: column;
  align-items: flex-start;
  min-height: auto;
  h1 {
    margin: 0 0 30px 4px;
    margin-top: 20px;
    color: #1B3CAA;
    line-height: 1.5;
    font-size: clamp(40px, 8vw, 60px);
    font-weight: 200;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }
  h2 {
    margin-top: 10px;
    color: #222876;
    line-height: 1.8;
    font-weight: 150;

  }
  h3{
    color: #1B3CAA;
    font-weight: 500;
    font-size:clamp(10px, 4vw, 30px);
  }


`

const Hero = () => {

    const {file:{
        childImageSharp: {fluid},
    },
} = useStaticQuery(query);

    return(
    
        <StyledHero>
            <h3 className="medium-heading">Bienvenue ! Je suis Sérina, </h3>

            <h1 className="big-heading">Une étudiante en Design Thinking et Technologies Web</h1> 
            <h2 className="medium-heading">Si vous recherchez une stagiaire en fin d’études à Paris, en tant que UX/UI Designer, Product Owner, ou Dev Front-End je suis ouverte aux opportunités.</h2>
        </StyledHero>
     
       
   
    )
}

export default Hero