import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const Card = styled(Link)`

    margin: 0 auto;
    padding: 50px 0; 
    max-width: 900px;
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;
`

const CardBody = styled.body`
    margin: 0 auto;
    padding: 20px 0; 
    height:auto;
    h1{
        font-weight: 300;
        font-size:clamp(10px, 4vw, 30px);
        text-align:center;
    }
    p{
        font-weight: 300;
        max-width:900px;
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
        <Card className="main">
            <CardBody>
                <h1>
                    {title}
                </h1>

                <p>
                {body}
                </p>
              
              <p>
              <Details to={path}>En savoir plus</Details>
              </p>
                
            </CardBody>
        </Card>
    )
}

export default Post