import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'


const RolesContainer = styled.section`
    min-height:auto;
    margin:auto auto;
`

const TextWrap = styled.div`
    
    align-items:center;
   
    
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
            <div key={index} className="cardWrapper">
                
                <div className="infoWrapper">
                    <TextWrap>
                        <div className="titleForWrapper">
                            {item.node.roles}
                        </div>
                        <div className="descriptionForWrapper">
                       
                            {item.node.description}
                       
                        </div>
                        
                    </TextWrap>

                </div>
            </div>
        )
    })
    return RolesArray
}


    return(
        <RolesContainer>
               
            <div className="wrapper">
            {getRoles(data)}
            </div>
        </RolesContainer>
    )
}

export default Roles