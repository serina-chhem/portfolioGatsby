import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'




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
                    fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
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
      
      <h3>Mes projets en cours</h3>

        <section>

            {projects && 
            projects.map(({node}, i) => {

                const {frontmatter} = node;
                const { title, description, image, path } = frontmatter;
                console.log(frontmatter);



                return (
                    <article key={i} className="project">
                        <div className="project-info">

                            <h3 className="medium-heading"> {title}</h3>
                            <p> {description}</p>

                        </div>

                        <div className="project-img" >
                            <a href={path}>
                                <Img fluid={image.childImageSharp.fluid} alt={title} className="img"/>
                            </a>
                        </div>

                   </article>
                )
            })} 


        </section>
    
    </div>
    )
}


export default Project