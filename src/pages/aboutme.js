import React from 'react'
import Footer from '../components/footer'
import SEO from "../components/seo"
import Header from '../components/header'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';
import Image from "gatsby-image"


const StyledAboutMe = styled.section`
  
  .inner {
    padding-top:40px;

    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
    
  }
  h2 {
    color: #222876;
    line-height: 1.5;
    font-weight: 400;
    font-size:1.1rem;

  }

  h5{
    color: #1B3CAA;
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
    color: #222876;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: "Helvetica Neue";
      font-size: 1rem;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #1B3CAA;
        font-size: 1.2rem;
        line-height: 12px;
      }
    }
  }
`


const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .img {
        filter: none;
      position: relative;
      mix-blend-mode: normal;
      filter: grayscale(100%) contrast(1);
      /* transition: var(--transition); */
    }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
   
  }
`;


const AboutPage = () => {

    const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "me.png"}) {
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
       
        <div>
             <Header/>
    <StyledAboutMe>
   
    <SEO title="About me" />

    <h3 className="medium-heading">À propos de moi</h3>

            <div className="inner">
      <StyledText>
        <h2 className="medium-heading">
        Hello ! À partir de février, je serai prête à pourvoir le stage de mes rêves : Product Owner/Manager. 
        </h2>
        <br/>
        <h2 className="medium-heading">
        Actuellement à l’ECE Paris en dernière année de cycle ingénieur, j'aime réaliser des projets, en partant du process de l’UX Design au développement de l’application mobile ou web. Mon but est de maximiser la valeur d’un produit et de représenter au mieux l’utilisateur.
        </h2>
        <br/>
        <h2 className="medium-heading">
        Sur cet incroyable portfolio, vous trouverez les projets que j’ai pu développer, qu’ils soient académiques (en équipe) ou personnels. 
        </h2>
        <br/>
        <h2 className="medium-heading">
        Voici les notions et compétences que j'ai acquises au cours de mon expérience :
        </h2>

        <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
                
        </StyledText>

        <StyledPic>
                <Image fixed={data.file.childImageSharp.fixed } alt = "Moi" className="img"/>
        </StyledPic>

        </div>


        
        
        </StyledAboutMe>

        <Footer/>
        </div>
        
    )
}
export default AboutPage