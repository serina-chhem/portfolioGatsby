import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Card = styled.section`

    margin: auto auto;
    padding: auto auto; 
    max-width: 900px;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
`

const CardBody = styled.body`
    /* margin: 0 auto; */
    padding: 0 0; 
    height:auto;
    h1{
        margin:0 auto;
        font-weight: 300;
        font-size:2rem;
        text-align:center;
    }
    
`
const TextWrapper = styled.div`
    
    
    /* text-align:center; */
    /* display:block; */
    margin:10px 0;
    align-items: flex-start;
    p{
        text-align:center;
        margin:auto auto;
       
        font-weight: 300;
      
        font-size:1rem;
        
        
    }

`



const Details = styled(Link)`
    color: #222876;
    /* display: flex;
    align-items:center; */
    text-align:center;
    font-weight: 500;

    text-decoration:none;
    

    @media screen and (max-width: 960px){
      text-align: center;
      padding:2rem;
      width:100%;
      display:table;

      &:hover{
        color:#222876;
        transition: all 0.3s ease;
      }
    }`


const Post = ({ title, path, body}) => {
    return(
        <Card>
            <CardBody>
                <h1>
                    {title}
                </h1>

            <TextWrapper>
                <p>
                    {body}
                </p>
              
            </TextWrapper>
                
              <p>
              <Details to={path}>En savoir plus</Details>
              </p>
                
            </CardBody>
        </Card>
    )
}

export default Post