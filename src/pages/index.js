import React from "react"
import '../styles/styles.scss'
import Header from '../components/header'
import SEO from "../components/seo"
import Footer from "../components/footer"
import Hero from "../components/hero"

const IndexPage = () => {

  return (
    <div className="main">
    <SEO title="Home" />
    <Header/>
    <Hero/>
    <Footer/>
    </div>
  

  )
 
  }

export default IndexPage
