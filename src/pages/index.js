import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"

const IndexPage = () => {

  return (
    <Layout>
    <SEO title="Home" />
    
    <h1>A student in design thinking and web development. </h1>
    <h2>If you are looking for an end-of-studies intern in Paris, France as a UX/UI Designer, Product Owner or Front-end Developper, I’m ready for some action !</h2>
   
    <Footer></Footer>

    </Layout>

  )
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>A student in design thinking and web development. </h1>
  //   <p>Welcome Gatsby site.</p>
  //   <p>Now go great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
  }

export default IndexPage
