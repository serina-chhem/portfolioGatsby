import Header from '../components/header'
import React from "react"
import SEO from "../components/seo"
import Footer from '../components/footer'
import Typical from 'react-typical'
import styled from 'styled-components'

const StyledContact = styled.section`

  h3{
    color:var(--saumon-clair);
  }

`

const Contact = () => {

    return(
        <div className="main">
        <Header/>
        <SEO title="Contact" />
      <body>

        <StyledContact className="contact-page">
        <article className="contact-form">
        <Typical steps={['Con', 50, 'Contactez', 30, 'Contactez', 10, 'Contactez-moi !',100]} loop="1" wrapper="h3"/> 

          {/* <h3>Contactez-moi !</h3> */}
          <form action="https://formspree.io/f/meqpzykd" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="nom"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>

            <button type="submit" className="submit-btn btn">
              <h3>Envoyer</h3>
              
            </button>

            </div>
           
          </form>
        </article>
      </StyledContact>
      
      </body>
      <Footer/>

       
        

        </div>
    )
}

export default Contact