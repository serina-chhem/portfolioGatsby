import React from 'react'
import Footer from '../components/footer'
import SEO from "../components/seo"
import Header from '../components/header'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Image from "gatsby-image"
import Typical from 'react-typical'
import {Link} from 'gatsby'



const StyledAboutMe = styled.section`
  
  .inner {
    padding-top:40px;

    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  
  section{
    padding-bottom:0px;
  }
    
  }
  p {
    color: var(--bleu-vert);
    justify-content: left;
    line-height: 1.5;
    font-weight: 400;
    font-size:1.1rem;
    font-weight:lighter;

  }

  h5{
    color: var(--bleu-brillant);
    line-height: 1.5;
    font-weight: 400;
    font-size:1.1rem;

  }

`

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    font-weight:lighter;
    color: var(--bleu-vert-fonce);
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
        color: var(--bleu-vert-fonce);
        font-size: 1.2rem;
        line-height: 12px;
      }
    }
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
      filter: grayscale(100%) contrast(1);
      /* transition: var(--transition); */
      
    }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
   
  }

`
const StyledLink = styled(Link)`
    width: 100%;
    /* background-color: var(--saumon); */
    border-radius: var(--radius);
    vertical-align: middle;
    &:hover,
    &:focus {
    background: transparent;
    &:before,
    .img {
        background: transparent;
        filter: none;
    }
    }
`


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "me.jpeg"}) {
        childImageSharp {
          fixed(width: 600, height: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    const skills = ['UX Design', 'Méthode Scrum', 'Design Thinking', 'React', 'Node.js', 'Micro-services Cloud'];

    return(
       
        <div className="main">
             <Header/>
             <body>
    <StyledAboutMe>
   
    <SEO title="About me" />

      
    <Typical steps={['À', 50, 'À propos', 30, 'À propos de', 10, 'À propos de moi.',100]} loop="2" wrapper="h3"/> 

            <div className="inner">
      <StyledText>
        <p className="medium-heading">
          <span>
        Hello ! A travers ce portfolio, vous allez apprendre à me connaitre et voir de quelle manière j'aborde mes projets.
          </span>
        </p>
        <br/>
        <p className="medium-heading">
         
  
        Dans tout ce que je fais, je tiens à ce que mes projets aient un impact autour de moi. 
        Et aujourd'hui, je souhaite me lancer dans le product management pour apporter une expérience pertinente aux utilisateurs.

        </p>
        <br/>
        <p className="medium-heading">
          <span>
        Vous trouverez donc les projets que j’ai pu développer, qu’ils soient académiques (en équipe) ou personnels. 
          </span>
        </p>

        <br/>
        <p className="medium-heading">
        Voici les notions et compétences que j'ai acquises au cours de mon expérience :
        </p>

        <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
                
        </StyledText>


        <StyledPic>
            <StyledLink>
                <Image fixed={data.file.childImageSharp.fixed } alt = "Moi" className="img"/>
            </StyledLink>
        </StyledPic>

        </div>


        
        
        </StyledAboutMe>
        </body>

        <Footer/>
        </div>
        
    )
}
export default AboutPage