import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import Footer from '../components/footer'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';

const StyledCegedim = styled.section`
   
    text-align:center;
    position: relative;
    
    h2{
        margin:auto;
        margin-top:7rem;
        color:var(--bleu);
        margin-left:20rem;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        position:absolute;
        @media (max-width: 768px) {
            margin:auto;
            margin-top:5rem;
            margin-left:5rem;
        }
       
    }
    h1{
        margin:auto;
        font-style: normal;
        font-weight: bold;
        letter-spacing:50px;
        font-size: 10rem;
        color:#F0EFEF;
        @media (max-width: 768px) {
            letter-spacing:1px;
            margin:auto;
            margin-left:auto;
            font-size:7rem;
           
        }

        @media screen and (max-width:1060px){
            font-size:6rem;
        }

    }
    p{
        margin:5rem;
        font-weight: normal;
        color:var(--bleu);
        font-size:2.5rem;
        line-height:2.5rem;
    }
    
    .small-p{
        margin:5rem;
        font-weight: lighter;
        color:var(--bleu-vert-fonce);
        font-size:1.4rem;
        line-height:2.5rem;
    }

    a{
        list-style:none;
    }

`

const StyledPic=styled.div`
    text-align:center;
    margin:5rem auto;
    .img{
    opacity:1;
    filter: none;
    /* margin:auto auto; */
    /* position: relative; */
        
    }
`

const DesignCegedim = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "DesignCegedim.png"}) {
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
            <StyledCegedim>
                <h2>CEGEDIM SRH</h2>
                <h1>SmartRH</h1>
                <p>
                Refonte de la page de présentation : 
                « Un SIRH innovant, intégré, conçu pour l’externalisation de la paie/RH »
                </p>
                <p className="small-p">
                Dans un contexte de recherche de stage, j’ai pu redesigner une page pour une entreprise innovante de technologies et services : Cegedim. 
                </p>
                <p className="small-p">
                En l’occurence, le poste d’UX/UI Designer auquel j’ai postulé concernait une solution d’externalisation de la paie nommée SIRH TEAMSRH.
                </p>
                <p className="small-p">
                Le lien suivant amène à la page que j’ai choisi de redesigner : 
                    <a href="https://www.cegedim-srh.com/solutions/Pages/La-philosophie-TEAMS_RH.aspx">
                    https://www.cegedim-srh.com/solutions/Pages/La-philosophie-TEAMS_RH.aspx
                    </a>
                </p>

                <h2>Recherche</h2>

                <h1> Mission</h1>
                <p className="small-p">Avant de commencer le design, j’ai commencé par analyser la vision de la solution SIRH (Système d’Information Ressources Humaines) pour respecter les valeurs de l’entreprise. </p>
                <p className="small-p">Ici, la vision de Cegedim SRH est d’améliorer la performance de l’équipe RH en créant des plateformes SaaS optimales. </p>
               
               <p className="small-p">Le site de l’entreprise se doit donc d’expliquer cette mission aux potentiels clients. D’après la page, le logiciel de paie a une capacité à fluidifier l’information, d’amélioer la productivité des RH et accroitre sa réactivité. Elle est complète et modulaire, et bénéficie des nouvelles technologies Java. 

                    En bref, la page explique clairement les avantages à utiliser la solution Cegedim SRH. Cependant, elle ne présente pas de démo pour l’éventuel client. 
                </p>

                <p className="small-p">           
                     En tentant de respecter au mieux le « Design System » de l’entreprise, voici la page que j’aurais voulu voir en tant que cliente.  
                </p>


                <StyledPic>
                <Img fluid={data.file.childImageSharp.fluid } className="img"/>
                </StyledPic>


            </StyledCegedim>
            <Footer/>

        </div>
    )
}

export default DesignCegedim
