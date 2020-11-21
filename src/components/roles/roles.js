import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'


const RolesContainer = styled.section`
    min-height:auto;
    margin:auto auto;
`

const RolesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:50px;
    padding: 0 2rem;
    justify-items:center;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:868){
        grid-template-columns:1fr;
    }


`

const RolesCard = styled.div`
    line-height:2r;
    width:150px;
    height:150px;
    align-items:center;
    /* position:relative; */
   
`

const RolesInfo = styled.div`
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

const RolesTitle = styled.div`

    text-align:center;
    margin: auto auto;
    font-style: normal;
    font-weight: bold;
    line-height:0.9rem;
    font-size: 1rem;
    color: rgba(27,60,170,1);
`

const RolesDescription = styled.div`
    p{
        line-height:0.9rem;
        font-size: 1rem;
        text-align: center;        
    }
`

const Roles = () =>{
    const data = useStaticQuery(graphql`
    query RolesQuery{
        allRolesJson {
            edges {
              node {
                description
                roles
              }
            }
          }
    }

`)

function getRoles(data){
    const RolesArray = []
    data.allRolesJson.edges.forEach((item, index)=>{
        RolesArray.push(
            <RolesCard key={index}>
                
                <RolesInfo>
                    <TextWrap>
                        <RolesTitle>
                            {item.node.roles}
                        </RolesTitle>
                        <RolesDescription>
                        <p>
                            {item.node.description}
                        </p>
                        </RolesDescription>
                        
                    </TextWrap>

                </RolesInfo>
            </RolesCard>
        )
    })
    return RolesArray
}


    return(
        <RolesContainer>
               
            <RolesWrapper>
            {getRoles(data)}
            </RolesWrapper>
        </RolesContainer>
    )
}

export default Roles