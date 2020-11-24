import Header from '../components/header'
import React from "react"
import SEO from "../components/seo"
import Footer from '../components/footer'



const Contact = () => {

    return(
        <div className="main">
        <Header/>
        <SEO title="Contact" />
      <body>

        <section className="contact-page">
        <article className="contact-form">
          <h3>Contactez-moi !</h3>
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
            </div>
            <button type="submit" className="submit-btn btn">
             <p>Envoyer</p>
              
            </button>
          </form>
        </article>
      </section>
      
      </body>
      <Footer/>

       
        

        </div>
    )
}

export default Contact