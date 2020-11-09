import React from 'react'
import Footer from '../components/footer'
import SEO from "../components/seo"
import Header from '../components/header'

const AboutPage = () => {

    return(
       
           
    <div>
        <Header/>
    <SEO title="About me" />
    <h1>About me</h1>
        <h5>
Hello there, I’m Serina, a last-year engineering student based in Paris, France. 

For the last couple of years, I have loved to learn about Design Thinking and Development, whether that be websites, applications, or anything in between. My goal is to design and build products to satisfy the users’ needs and drives. 

Currently I’m finishing my engineering school at ECE Paris, and from February 8th  2021, I will be available to take on a new adventure so feel free to contact me if you’re looking for an intern based in Paris, France.

Here are a few technologies I’ve been working with recently : 

- React 
- Node.js  
- MongoDB
- Design Thinking </h5>
<Footer></Footer>
    </div>
        
    )
}
export default AboutPage