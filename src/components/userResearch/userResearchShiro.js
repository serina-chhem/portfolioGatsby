import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components'


const UserResearchContainer = styled.section`
    min-height:100vh;
    /* padding: 5rem calc((100vw - 1300px)/2); */

`
const UserResearchHeading = styled.div`
    text-align:center;
    margin: 0 auto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    color: rgba(27,60,170,1);
`
const UserResearchWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:200px;
    justify-items:center;
    padding: 0 2rem;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:868){
        grid-template-columns:1fr;
    }


`

const URCard = styled.div`
    line-height:2;
    width:150px;
    height:150px;
   

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
    /* width:100px; */
    margin:15px auto;

    @media screen and (max-width:280px){
        padding:0 1 rem;
    }

`
const TextWrap = styled.div`
    /* display:flex; */
    align-items:center;
    /* position:absolute; */
    
`

const URTitle = styled.div`

    text-align:center;
    margin: auto auto;
    font-style: normal;
    font-weight: bold;
    line-height:0.9rem;
    font-size: 1rem;
    color: rgba(27,60,170,1);
`

const URDescription = styled.div`
    p{
        line-height:0.9rem;
        font-size: 1rem;
        text-align: center;        
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
            <URCard key={index}>
                <URImg src={item.node.img.childImageSharp.fluid.src} 
                    fluid={item.node.img.childImageSharp.fluid}
                    alt={item.node.alt} 
                    className="img"/>
                <URInfo>
                    <TextWrap>
                        <URTitle>
                            {item.node.name}
                        </URTitle>
                        <URDescription>
                        <p>
                            {item.node.description}
                        </p>
                        </URDescription>
                        
                    </TextWrap>

                </URInfo>
            </URCard>
        )
    })
    return URArray
}


    return(
        <UserResearchContainer>
            <UserResearchHeading>

            </UserResearchHeading>
               
            <UserResearchWrapper>
            {getUR(data)}
            </UserResearchWrapper>
        </UserResearchContainer>
    )
}

export default UserResearchShiro