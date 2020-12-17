import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby';

const StyledMethods = styled.section`

.wrapper-block{
  display: flex;
  width: auto;
  margin-top: 55px;
  margin-bottom: 0px;
  -webkit-box-pack: center;
  justify-content: center;

  flex-wrap: wrap;


  .box-method {

    background: rgba( 255, 255, 255, 0.20 );

    box-shadow: 0 5px 10px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    border-radius: 10px;
   
    display: flex;
    width: 210px;
    height: 380px;
    margin: 1.9%;
    padding: 35px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-align: start;
    align-self: center;
    align-items: center;
    text-align:center;
    transition: var(--transition);

    .svg-method{
      width:11rem;
      height:8rem;
      /* position: absolute; */
      margin:0px auto;
      @media (max-width: 768px) {
        width:20rem;
        height:10rem;
      }
      @media (max-width: 368px) {
        width:5rem;
        height:3rem;
      }
    }

    p{
        margin: 0rem;
        /* color:var(--bleu); */
        color:#a891bd;

        
    }
    h3{
        font-size:1.8rem;
        /* color:var(--bleu); */

    }
    span{
        color:var(--bleu-vert);
        position: relative;
    }
  }

}
`
const Methods = () => {

    const data = useStaticQuery(graphql`
    query methodsQuery{
        allMethodsJson {
            edges {
              node {
                description
                alt
                img {
                  extension
                  publicURL
                }
              }
            }
          }
    }

`)


function getMethods(data){
    const methodsArray = []
    data.allMethodsJson.edges.forEach((item, index)=>{
        methodsArray.push(
            <div key={index} className="box-method">
                
                <img className="svg-method" src={item.node.img.publicURL} alt={item.node.alt}/>
                <h3> <span> #{index+1}</span> {item.node.alt}</h3>
                <p>{item.node.description} </p>
            </div>
        )
    })
    return methodsArray
}


    return (
        <StyledMethods>

        <div className="wrapper-block">
            {getMethods(data)}
        </div>

      </StyledMethods>

    )
}

export default Methods
