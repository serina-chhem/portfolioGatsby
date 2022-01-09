import React, {useState} from "react"
import styled from 'styled-components'
import Typical from 'react-typical'
import { useStaticQuery, graphql } from 'gatsby';



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

span{
    font-size: 2.7rem;
        font-weight: 600;
    color: var(--saumon);
}

  
`



const Hero = () => {
    const data = useStaticQuery(graphql`
    {
        file(relativePath: {eq: "linearBackground.svg"}) {
            extension
            id
            publicURL
            base
          }
    }
  `)

    return(


      
        <StyledHero >
            
            <h3 className={"medium-heading"}>Bienvenue ! Je suis </h3>  
            {/* <Typical steps={['Bi', 300, 'Bienvenue !', 500, 'Bienvenue ! Je suis', 200, 'Bienvenue ! Je suis Sérina,', 200]} loop={Infinity} wrapper="h3"/>  */}
         
            <Typical steps={['Sérina', 1000, 'déterminée,', 1000, 'adaptable', 1000, 'passionnée', 1000]} loop={Infinity} wrapper="h1"/> 
            {/* <h1>
                Une étudiante <span>déterminée, adaptable </span>  et prête à <span>créer des expériences utilisateurs uniques. </span>
            </h1> */}
            
            {/* <StyledPic>
                <img className = "img" src={data.file.publicURL} alt={data.base}/>
            </StyledPic> */}
           
           
            <h2 className="medium-heading">Fraichement diplômée, j'ai développé mon propre site pour me démarquer et m'exprimer librement.
            Sur ce site se trouvent les études de cas sur lesquels je travaille. Je partagerai également mon opinion sur des sujets qui attirent mon attention.
             </h2>
            
        </StyledHero>
      
       
      
       
   
    )
}

export default Hero