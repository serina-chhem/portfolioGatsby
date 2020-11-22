import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'


const UserResearchContainer = styled.section`
    min-height:auto;
    margin:auto auto;
    padding-top:0;
    padding-bottom:13rem;
`


const URWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:200px;
    padding: auto 2rem;
    justify-items:center;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:868){
        grid-template-columns:1fr;
    }

`



const URImg = styled(Img)`

.img{
    height:100%;
    width:100%;
    /* position:relative; */
    margin: auto auto;
}
    

`
const URInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    padding: 0 0;

    margin:15px auto;

    @media screen and (max-width:280px){
        padding:0 1 rem;
    }

`




const UserResearchShiro = () => {

const data = useStaticQuery(graphql`
    query URQuery{
        allUserResearchJson {
            edges {
              node {
                alt
                name
                description
                img {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
    }

`)

function getUR(data){
    const URArray = []
    data.allUserResearchJson.edges.forEach((item, index)=>{
        URArray.push(
            <div key={index} className="cardWrapper">
                <URImg src={item.node.img.childImageSharp.fluid.src} 
                    fluid={item.node.img.childImageSharp.fluid}
                    alt={item.node.alt} 
                    className="img"/>
                <div className="infoWrapper">
                    <div className="textwrap">
                        <div className="titleForWrapper">
                            {item.node.name}
                        </div>
                        <div className="descriptionForWrapper">
                      
                            {item.node.description}
                    
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    })
    return URArray
}


    return(
        <UserResearchContainer>
        
            <URWrapper>
            {getUR(data)}
            </URWrapper>
        </UserResearchContainer>
    )
}

export default UserResearchShiro