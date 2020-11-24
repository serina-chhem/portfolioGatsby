import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import styled from 'styled-components'
import SEO from "../components/seo"
import Image from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';


const StyledTrip = styled.section`
flex-direction: column;
    align-items: flex-start;
    min-height: auto;

    h1{
        white-space: nowrap;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: var(--bleu-vert);
    }
    h5{
        margin: 50px;
        text-align: center;
        font-style: normal;
        font-weight: lighter;
        font-size: 45px;
        color: var(--saumon);
    }
    h6{
        margin: 50px;
        text-align: center;
        font-style: normal;
        font-weight: lighter;
        font-size: 18px;
        color: var(--saumon);
    }
    h4{
        white-space: nowrap;
        text-align: left;
        font-family: var(--font);
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: var(--vert-brillant);
        text-transform: uppercase;
    }
    h2{
        margin:30px auto;
        line-height: 1.3;
        text-align: left;
        font-family: var(--font);
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: var(--bleu-clair);
        text-transform: uppercase;
    }
    p{
        text-align:left;
        margin-bottom:30px;
        line-height:1.3;
        color:var(--bleu);

    }

    .wrapper2{
        display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap:100px;
    /* padding: 0 2rem; */
    padding-bottom:15rem;
    justify-items:center;

    @media screen and (max-width:1200px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:868){
        grid-template-columns:1fr;
    }
    }
   
`
const StyledPic = styled.div`
   margin:50px auto;
  max-width: 900px;
  text-align:center;
  
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
    
  }
  .img{
    opacity:1;
    filter: none;
    margin:auto auto;
    position: relative;
        
    }
`


const Trip = () => {
    const data = useStaticQuery(graphql`
    query{
        tripPhotos:allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "imagesTripPage"}}, sort: {fields: base, order: ASC}) {
            edges {
              node {
                id
                base
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
    }
    `)

    const userResearch=[{
        "question":"Comment organisez-vous vos vacances ?",
        "validation":"Détermination des habitudes en amont du voyage, et des durées de voyage."
    },
    {
        "question":"Que ressentez-vous pendant l’organisation et après le voyage ?",
        "validation":"Détermination des émotions pendant l’organisation du voyage et de l’impact."
    },
    {
        "question":"Quels moyens de transports utilisez-vous pour vous déplacer ?",
        "validation":"Détermination des habitudes en termes de mobilité des sondés."
    },
    ];
    const resultats=[{
        "question":"ORGANISATION",
        "validation":"Les interrogés préfèrent organiser eux-mêmes leurs voyages et vont sur internet, que ce soit pour le choix des destinations, que la réservation de vols/trains/voitures, le choix de l’hébergement ou les activités à faire une fois sur place. Pour des vacances à destinations multiples, les voyageurs partent au minimum deux semaines."
    },
    {
        "question":"MOYENS DE TRANSPORT",
        "validation":"Au sein d’une ville, is se déplacent principalement en transports en commun. Sinon, en voiture de location si les transports ne sont pas très développés, pour plus d’autonomie."
    },
    {
        "question":"RESSENTIS",
        "validation":"Pendant l’organisation de vacances, la plupart des interrogés ressentent du stress et sont souvent submergés mais l’excitation prend le dessus. Après un long voyage, ils sont heureux de rentrer avec de bons souvenirs malgré la fatigue."
    },
    ];
    function getUR(data){
        const uRArray = []
        data.forEach((item, index)=>{
            uRArray.push(
                <div key={index} className="cardWrapper">
                    
                    <div className="infoWrapper">
                        <div className="textwrap">
                            <div className="titleForWrapper">
                                {item.question}
                            </div>
                            <div className="descriptionForWrapper">
                         
                                {item.validation}
                
                            </div>
                            
                        </div>
    
                    </div>
                </div>
            )
        })
        return uRArray
    }
    

    return(
        <div className="main">
        <SEO title="Trip" />

        <Header/>

            <StyledTrip>
                <section>
                    <h1 className="medium-heading">PROJET PERSONNEL </h1>
                    
                    <h5>Design d’un outil qui aide les voyageurs à organiser leurs vacances. </h5>

                    <h6>Ayant eu la chance de voyager dans de nombreux pays, j’ai décidé de m’engager dans ce nouveau projet en autonomie. J’ai donc la contrainte d’adopter tous les rôles d’une équipe agile. </h6>

                    <StyledPic key={data.tripPhotos.edges[0].node.id}>
                        <Image fluid={data.tripPhotos.edges[0].node.childImageSharp.fluid} 
                        alt =  {data.tripPhotos.edges[0].node.base}
                        className="img"/>
                    </StyledPic>

                    <h4>le challenge</h4>

                    <h2>aider les voyageurs à organiser leurs vacances à destinations multiples</h2>

                    
                    <p>Des vacances à destinations multiples semblent excitantes pour presque tout le monde. Cependant, l’organisation de celles-ci peut être stressante.</p>
                
                    <p>Le challenge est donc d’aider à surmonter ce sentiment de stress des futurs voyageurs et de rendre tout aussi agréable l’organisation. </p>
                    <p>Il s’agit d’aider les futurs touristes à créer des itinéraires qui connectent leurs points d’intérêts, en considérant les durées de séjours désirées et en proposant des moyens de transports économique.</p>

                    <h4> ITÉRATIONS FONCTIONNELLES</h4>

                    <h2>RECHERCHE UTILISATEUR</h2>
                    <p>Comme tout début de process, j’ai commencé par une recherche utilisateur pour approfondir et préciser le challenge.</p>
                
                    <p>J’ai donc contacté une dizaine de personnes qui voyagent au moins deux fois par an à l’étranger. </p>
                    <p>Voici les questions que j’ai posé et que ce que j’ai voulu valider : </p>
                
                    <div className="wrapper">
                        {getUR(userResearch)}
                    </div>
                            
                    <h4>ce que je retiens</h4>

                    <div className="wrapper2">
                        {getUR(resultats)}
                    </div>

                    <h4>Désolé... Le projet est actuellement en cours de réalisation.</h4>
                
                </section>
            </StyledTrip>
        <Footer/>
        </div>
    )
}

export default Trip