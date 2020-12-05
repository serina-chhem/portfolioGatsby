import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from "gatsby"
import Typical from 'react-typical'


const StyledProject = styled.section`

   padding-top: 4rem;
     .project {
        display: grid;
        margin-bottom: 4rem;
    }
    .project-info {
        background: var(--bleu-vert-fonce);
        padding: 1rem 2rem;
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    h3{
        
        position: absolute;
    
    }
    h4{
        color:var(--saumon-clair)
    }

    p{
        color:var(--saumon-clair)
    }

  .background-text{
        margin-bottom: 8rem;
        align-items:center;
        font-size: 8rem;
        font-weight: 700;
        letter-spacing: 1.7rem;
        color: var(--saumon-clair);
        display: flex;
        align-items: center;
        text-align:center;
        z-index: -100;
        @media screen and (max-width:868px) {
            font-size: 4rem;
            margin-bottom: 3rem;
            letter-spacing: 0.1rem;
        }
        @media screen and (max-width:1200px){
            font-size:5rem;
            margin-bottom: 4rem;
            letter-spacing: 1rem;
            }

    }

 
 @media screen and (min-width: 992px) {
    .project {
     grid-template-columns: repeat(12, 1fr);
     align-items: center;
   }
    .project-info {
     border-radius: var(--radius);
     box-shadow: var(--noir);
     text-align: center;
     z-index: 2;
     grid-column: 5 /12;
     grid-row: 1 / 1;
   }
   .project:nth-of-type(even) .project-image {
     grid-column: 5 / -1;
     grid-row: 1 / 1;
   }
   .project:nth-of-type(even) .project-info {
     grid-column: 2 / span 7;
     grid-row: 1 / 1;
     text-align: center;
   }
  .project-image {
    grid-column: 1 / span 8;
     /* grid-column-end: 8;  */
     grid-row: 1 / 1;
     height: 30rem;
     border-radius: 1rem;
     box-shadow: var(--noir);
    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
  
    .img {
        border-radius: 1rem;
         mix-blend-mode: multiply;
         filter: grayscale(50%) contrast(1) brightness(80%);
        
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

    <Typical steps={['Mes', 10, 'Mes projets', 10, 'Mes projets en', 10, 'Mes projets en cours',100]} loop="2" wrapper="h3"/> 

    

        {/* <h3 className="medium-heading">Mes projets en cours</h3> */}

        
            <p className="background-text">Portfolio</p>


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