import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Img from "gatsby-image"

const PersonaContainer = styled.section`
    
    padding-top:0;
    padding-bottom:3rem;
    .inner {
        align-items:center;
        margin:auto auto;
        display: grid;
        grid-template-columns: 2fr 2fr;
        /* grid-gap: 50px; */
        @media (max-width: 768px) {
        display: block;
        }
    }

    p{
        font-size:15px;
        font-weight:lighter;
    }
`

const PersonaPic = styled.div`
 /* position: relative; */
  max-width: 300px;
  
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .img {
        filter: none;
      /* position: relative; */
      mix-blend-mode: normal;
      
    }

`
const PersonaShiro = () => {

    const data = useStaticQuery(graphql`
    query imagesAndImages{
        image: file(relativePath: {eq: "personaShiro.jpg"}){
           childImageSharp{
               fixed(width:300, height:303){
                    ...GatsbyImageSharpFixed
               }
           }
          }

    }
    
  `)
    return (
        <PersonaContainer >
        <div className="inner">


        <PersonaPic>
           
                <Img fixed={data.image.childImageSharp.fixed } alt = "Persona" className="img"/>
       
        </PersonaPic>
            <p>
            Thomas  est un père de famille  de 38 ans et pratique  depuis 6 ans la chirurgie cardiovasculaire  à  l’hôpital. <br/> <br/>Il  est familier avec  les nouvelles technologies, utilise son iMac comme poste de travail et son  smartphone  tous les jours.  Thomas  possède  une Google Home  chez lui et pense que l’assistant vocal  va  représenter  la  troisième  interface homme-machine  la  plus importante  après notre ordinateur et smartphone.    
            <br/> <br/>
            Il est passionné par son métier et est dans sa "bulle" en bloc opératoire.  S’il ne passe pas son temps avec un patient ou à opérer, Thomas  ne se sent pas utile.  Il a conscience que les tâches administratives sont importantes mais souhaite les optimiser un maximum. 
            <br/><br/>
            Le stress et l’anxiété étant des sentiments omniprésents  lorsqu’il enfile sa blouse, Thomas  trouve une échappatoire  lorsqu’il rentre auprès de sa famille. C’est pour cette raison qu’il souhaite passer davantage de temps avec ses proches.   
            </p>
        </div>
        

    </PersonaContainer>
    )
}

export default PersonaShiro
