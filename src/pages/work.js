import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'
import Project from '../components/project'

const StyledWork = styled.section`
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    min-height: auto;
    padding-top:auto;
    
   
`

const Work = () => {
    

    return(
        <div className="main">
        <Header/>
        <SEO title="Work" />

        <StyledWork>

            <Project/>

          
        </StyledWork>

        <Footer/>

        </div>
        
       

    )

}

export default Work