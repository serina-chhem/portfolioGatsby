import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Post from '../components/posts'

const StyledWork = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
    h3{
        text-align:center;
    }
   
`

const IndexQuery = graphql`
query{
    allMarkdownRemark{
        edges{
          node{
            id
            frontmatter{
              title
              date
              author
              path
            }
            excerpt
          }
        }
      }
}

`

const Work = () => {

    return(
        <div className="main">
        <Header/>
        <SEO title="Work" />

        <StyledWork>
            <h3 className="medium-heading">Mes projets</h3>
            <StaticQuery query={IndexQuery} render={data => {

                return(
                    <div>
                        {data.allMarkdownRemark.edges.map(({node}) => (
                            <Post title={node.frontmatter.title}
                                // author={node.frontmatter.author}
                                path={node.frontmatter.path}
                                // date={node.frontmatter.date}
                                body={node.excerpt}
                                />
                        ) )}
                    </div>
                )
            }}/>

          
        </StyledWork>
      


        <Footer/>

        </div>
        

    )
}

export default Work