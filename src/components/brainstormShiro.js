import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Img from "gatsby-image"

const BrainstormContainer = styled.section`
    
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
`

const ProtoPersonaPic = styled.div`
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

const StyledText = styled.div`
  ul.caract-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(400px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color: var(--bleu-brillant);
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font);
      font-size: 1rem;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--bleu-brillant);
        font-size: 1.2rem;
        line-height: 12px;
      }
    }
  }
`

const Brainstorm = () => {

    const data = useStaticQuery(graphql`
    query Images{
        image: file(relativePath: {eq: "protoPersonaLogo.png"}){
           childImageSharp{
               fixed(width:300, height:303){
                    ...GatsbyImageSharpFixed
               }
           }
          }

    }
    
  `)

  const caracteristiques = ['Chirurgien praticien hospitalier', 
                            'A entre 35 et 45 ans', 
                            'Bon cadre de vie',
                            'Père de famille ',
                            'Souhaite rentrer plus tôt chez lui',
                            'Se tient à l’actualité des nouvelles technologies mais consomme uniquement ce dont il a besoin'];


    return(
        <BrainstormContainer >
            <div className="inner">


            <ProtoPersonaPic>
               
                    <Img fixed={data.image.childImageSharp.fixed } alt = "protoPerso" className="img"/>
           
            </ProtoPersonaPic>
            <StyledText>
            <ul className="caract-list">
               {caracteristiques && caracteristiques.map((car, i) => <li key={i}>{car}</li>)}
            </ul>

            </StyledText>
            </div>
            

        </BrainstormContainer>
    )
}

export default Brainstorm