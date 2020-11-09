import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
import '../styles/styles.scss'
import Header from '../components/header'
import SEO from "../components/seo"
import Footer from "../components/footer"
import styled from "styled-components"
import Hero from "../components/hero"

const IndexPage = () => {

  return (
    <div>
    <SEO title="Home" />
    <Header/>
    <Hero/>

    </div>
  

  )
 
  }

export default IndexPage
