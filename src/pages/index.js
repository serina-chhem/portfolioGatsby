import React from "react"
import '../styles/styles.scss'
import Header from '../components/header'
import SEO from "../components/seo"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Project from "../components/project"

const IndexPage = () => {

  return (
    <div className="main" >
    <SEO title="Home" />

    <Header/>

    <section>
    <Hero/>
    <Project/>
    </section>

    
    <Footer/>
    </div>
  

  )
 
  }

export default IndexPage
