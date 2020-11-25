import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const StyledProject = styled.section`
    /* display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center; */

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
     border-radius: var(--radius);
     box-shadow: var(--noir);

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      background-color: var(--saumon);
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
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        /* background-color: var(--background); */
        mix-blend-mode: screen;
      }
    }
    .img {
        border-radius: var(--radius);
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
            <h3 className="medium-heading">Mes projets en cours</h3>


    <StyledProject>

            {projects && 
            projects.map(({node}, i) => {

                const {frontmatter} = node;
                const { title, description, image, path } = frontmatter;
               
                return (
                    <article key={i} className="project">
                        <div className="project-info">

                            <h3 className="medium-heading"> {title}</h3>
                            <p> {description}</p>

                        </div>

                        <div className="project-image" >
                            <a href={path}>
                                <Img fluid={image.childImageSharp.fluid} alt={title} className="img"/>
                                   
                            </a>
                        </div>

                   </article>
                )
            })} 

    
    </StyledProject>

    </div>
    )
}


export default Project