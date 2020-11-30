import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';


const StyledTF1 = styled.section`
   
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

`


const Tf1 = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "tf1VisionBoard.png"}) {
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

        <SEO title="TF1" />
            
            <StyledTF1>
                
                {/* <StyledPic>
                    <Img fluid={data.file.childImageSharp.fluid } alt = "tf1" className="img"/>
                </StyledPic> */}

                <h1>Assistant Product Owner</h1>
                <h2>Comment fidéliser les consommateurs de programmes TF1 via la plateforme web ? </h2>
                <p>Au sein du Groupe, e-TF1 a pour ambition de développer pour les téléspectateurs, sur le web, mobile ou encore l’IPTV, des moyens toujours plus innovants de consommer leurs programmes et de prolonger l’expérience qu’ils partagent avec eux. </p>
                <p>Dans ce contexte, le groupe recherche un assistant Product Owner pour rejoindre le pôle Produit de la Direction Innovation et Digitale.</p>
                <p>Pour montrer ma motivation pour le poste, j’ai décidé d’imaginer une partie du projet.</p>

                <h1>La mission de TF1 </h1>
                <p>Partager des contenus qui inspirent positivement la société. </p>
               <p>En partant de cette déclaration, j'ai pu établir la manière dont je commencerai le projet en tant que Product Owner.  </p>
               
               {/* <h2>Recherche utilisateurs</h2> */}
               <StyledPic>
                    <Img fluid={data.file.childImageSharp.fluid } alt = "tf1VisionBoard" className="img"/>
                </StyledPic>
            
                <h1>Perspectives</h1>
                <p>Pour l'instant, il ne s'agit que d'une ébauche, mais on pourrait imaginer la durée du projet sur des sprints de 2 semaines.</p>
            </StyledTF1>
            </body>
            <Footer/>
        </div>
    )
}

export default Tf1
