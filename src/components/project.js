import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Typical from 'react-typical'


const StyledProject = styled.section`

    text-align:center;
    position: relative;
    padding-top: 2rem;
     .project {
        display: grid;
        margin-top:5rem;
        /* margin-bottom: 1rem; */
    }
    .project-info {
        background: var(--bleu-vert-fonce);
        padding: 1rem 2rem;
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    
    h4, p{
        color:var(--saumon)
    }

    h2{
        margin:auto;
        margin-top:5rem;
        color:var(--saumon);
        margin-left:20rem;
        font-style: normal;
        font-weight: bold;
        font-size: 3rem;
        position:absolute;
        @media (max-width: 768px) {

            margin:auto;
            font-size: 2.5rem;
            margin-top:5rem;
            font-weight: normal;
            margin-left:auto;
        }
        @media (max-width: 368px) {
            margin:auto;
            font-size: 2rem;
            margin-top:5rem;
            font-weight: normal;
            margin-left:auto;
           
        }
       
    }
    h1{
        
        margin:auto;
        margin-left:auto;
        text-align:center;

        font-style: normal;
        font-weight: bolder;
        letter-spacing:40px;
        font-size: 8rem;
        color:var(--saumon-clair);
        @media (max-width: 768px) {

            margin:auto;
            margin-left:0px;
            font-size:7rem;
           
        }
        @media (max-width: 268px) {
            margin:auto;
            margin-left:0px;
            font-size:3rem;
           
        }

        @media screen and (max-width:1060px){
            font-size:6rem;
        }

    }


 
 @media screen and (min-width: 992px) {
    .project {
    
     grid-template-columns: repeat(12, 1fr);
     align-items: center;
   
   }
    .project-info {
        /* border-radius: var(--radius); */

        text-align: center;
        z-index: 2;

        background: rgba(251, 232, 231, 0.23 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 8px );
        -webkit-backdrop-filter: blur( 8px );
        border-radius: 10px;

        grid-column: 8 / span 12;
        grid-row: 1 / 1;
     
   }
   .project:nth-of-type(even) .project-image {
     grid-column: 5 / -1;
     grid-row: 1 / 1;
   }
   .project:nth-of-type(even) .project-info {
     grid-column: 1 / span 5;
     grid-row: 1 / 1;
     text-align: center;
   }
  .project-image {
    grid-column: 1 / span 8;
     grid-row: 1 / 1;
     height: 30rem;
     border-radius: 1rem;
     box-shadow: var(--noir);
     z-index: 0;
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
  
    .img {
        border-radius: 1rem;
         mix-blend-mode: multiply;
         filter: grayscale(50%) contrast(1) brightness(80%);
         box-shadow: 7px 7px 5px var(--background);

         @media (max-width: 768px) {
           object-fit: cover;
           width: auto;
           height: 100%;
           filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
 }
  
`
const StyledLink = styled(Link)`
    width: 100%;
    background-color: var(--saumon-clair);
    border-radius: 1rem;
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



const Project = () => {
    
const data = useStaticQuery(graphql`
query{
    proj : allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}){
    edges{
        node {
            id
            frontmatter {
                title
                description
                path
                image {
                    childImageSharp {
                    fluid(maxWidth: 700, traceSVG: { color: "#2ec1ac" }) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                    }
                }
                
              
            }
          }
        }
    }
}
`);


const projects = data.proj.edges.filter(({node}) => node );
    
    return(
        <div>

           

    <StyledProject>

    {/* <Typical steps={['Mes', 10, 'Mes projets', 10, 'Mes projets en', 10, 'Mes projets en cours',100]} loop="2" wrapper="h3"/>  */}

    

        {/* <h3 className="medium-heading">Mes projets en cours</h3> */}

    
        <h2>Projets en cours</h2>
   
        <h1 className="textwrap" >Portfolio</h1>
  
       


            {projects && 
            projects.map(({node}, i) => {

                const {frontmatter} = node;
                const { title, description, image, path } = frontmatter;
               
                return (
                    <article key={i} className="project">
                        <div className="project-info">

                            <h4 className="medium-heading"> {title}</h4>
                            <p> {description}</p>

                        </div>

                        <div className="project-image" >
                            <StyledLink to={path}>
                                <Img fluid={image.childImageSharp.fluid} alt={title} className="img"/>    
                            </StyledLink>
                        </div>

                   </article>
                )
            })} 

    
    </StyledProject>

    </div>
    )
}


export default Project