import Header from '../components/header'
import Footer from '../components/footer'
import React from "react"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components'
import Image from "gatsby-image"
import UserResearchShiro from '../components/userResearch/userResearchShiro'
import Roles from '../components/roles/roles.js'
import Brainstorm from '../components/brainstormShiro'
import PersonaShiro from '../components/personaShiro'


const StyledShiro = styled.section`
    flex-direction: column;
    align-items: flex-start;
    min-height: auto;

    h1{
        white-space: nowrap;
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: rgba(27,60,170,1);
    }
    h5{
        margin: 50px;
        text-align: center;
        font-style: normal;
        font-weight: lighter;
        font-size: 45px;
        color: rgba(34,40,118,1);
    }
    h6{
        margin: 50px;
        text-align: center;
        font-style: normal;
        font-weight: lighter;
        font-size: 18px;
        color: rgba(34,40,118,1);
    }
    h2{
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(27,60,170,1);
    }
    h4{
        white-space: nowrap;
        text-align: left;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(34,40,118,1);
        text-transform: uppercase;
    }
    h2{
        margin:30px auto;
        line-height: 1.3;
        text-align: left;
        font-family: Helvetica Neue;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        color: rgba(27,60,170,1);
        text-transform: uppercase;
    }
    p{
        text-align:left;
        margin-bottom:30px;
        line-height:1.3;
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



const Shiro = () => {
    const data = useStaticQuery(graphql`
    query{
        shiroPhotos:allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "imagesShiroPage"}}) {
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

    const us1=[{
        "titre":"ACTIVATION",
        "description":"En tant qu’utilisateur, je veux pouvoir invoquer Shiro sur l’application afin de remplir un nouveau CR."
    },
    {
        "titre":"IDENTIFICATION",
        "description":"En tant qu’utilisateur, je veux pouvoir m’identifier en tant qu’opérateur principal, afin de remplir l’en-tête du CR."
    },
    {
        "titre":"RAPPORTER",
        "description":"En tant qu’utilisateur, je veux pouvoir communiquer mon compte-rendu à mon assistant vocal."
    },
];
const us2=[{
    "titre":"TRANSFORMATION",
    "description":"En tant qu’utilisateur, je veux pouvoir visualiser mon CR sur l’application afin de vérifier que Shiro comprenne bien."
},
{
    "titre":"FEEDBACK",
    "description":"En tant qu’utilisateur, je veux pouvoir demander le nom de famille d’un de mes patients enregistrés afin de me retrouver dans mes CR."
},
{
    "titre":"MODIFICATION",
    "description":"En tant qu’utilisateur, je veux pouvoir modifier à l’oral ou sur l’app un CR."
},
];


function getUS(data){
    const usArray = []
    data.forEach((item, index)=>{
        usArray.push(
            <div key={index} className="cardWrapper">
                
                <div className="infoWrapper">
                    <div className="textwrap">
                        <div className="titleForWrapper">
                            {item.titre}
                        </div>
                        <div className="descriptionForWrapper">
                     
                            {item.description}
            
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    })
    return usArray
}


    return(
        <div className="main">
        <SEO title="Shiro" />
        <Header/>


        <StyledShiro>
            <h1> PROJET SHIRO </h1>

            <h5> L’assistant vocal qui comprend les comptes-rendus opératoires des chirurgiens.</h5>

            <h6>  Dans le cadre de mon cursus scolaire, je réalise actuellement ce projet de fin d’études en équipe, initialement porté par le Centre de Recherches Interdisciplinaires de Paris. 
            <br/><br/>
                Ce projet vise à alléger le travail des chirurgiens praticiens hospitaliers, souvent surchargés par leur travail dû au manque d'effectif.

            <br/> <br/>
                Ici, je détaille le processus de Design Thinking pour répondre à la problématique suivante :<br/> <span> Comment alléger le travail des chirurgiens ? </span>
                
            </h6>
            <br/>
            
            <h1> MES RÔLES </h1>
         
            <Roles/>

            <StyledPic key={data.shiroPhotos.edges[3].node.id}>
                 <Image fluid={data.shiroPhotos.edges[3].node.childImageSharp.fluid} 
                 alt =  {data.shiroPhotos.edges[3].node.base}
                 className="img"/>
            </StyledPic>

            <h4>la mission des chirurgiens</h4>
            <h2>soigner les malades  </h2>
            <p>Je rappelle ici que le but des chirurgiens est de pratiquer des interventions chirurgicales sur un homme.</p>
            <p>Il s'agit d'un spécialiste qui décide avec le patient et les autres professionnels de santé, s'il faut opérer ou non après avoir réaliser des examens préliminaires. Il définit ensuite le mode d'intervention opératoire. </p>

   
        <h4>LE CHALLENGE</h4>
        <h2>OPTIMISER LES COMPTES-RENDUS DES CHIRURGIENS</h2>
        <p>En ce contexte de crise sanitaire, les services de santé sont complètement bouleversés. Un an après l’apparition de la maladie infectieuse COVID-19, les hôpitaux crient à l’aide.</p>
       
        <p>Le personnel de santé est en sous-effectif et les chirurgiens sont surchargés par leur métier.</p>
        
        <p> Notre challenge est d’optimiser en temps les tâches secondaires des chirurgiens et ainsi leur permettre de passer plus de temps en salle d’opération.      </p>
      
        <h4>préparation du terrain</h4>
        <h2>notre proto-persona</h2>
        <p>L’élaboration du proto-persona est importante pour effectuer une recherche utilisateur la plus pertinente possible. Le proto-persona nous sert à représenter au mieux notre utilisateur final. Nous l’avons établi en suivant trois étapes.</p>

        <h4>BRAINSTORM : QUI POURRAIT ÊTRE NOTRE PERSONA ?</h4>

        <Brainstorm/>
        <h4>LES 5 « POURQUOI ? »</h4>
        <p> Pour comprendre les motivations et besoins de notre persona, nous avons imaginé ce dialogue que nous engagerions:</p>

        <p className="whyUs">- Pourquoi utiliseriez-vous un assistant vocal qui remplit votre compte-rendu post-opératoire ?    </p>
        <p className="whyUser">- Je n'aime pas passer mon temps sur les tâches administratives et je préfère dicter le compte-rendu plutôt que de le taper manuellement sur mon ordinateur. </p>
        <p className="whyUs">-	Pourquoi vouloir passer moins de temps dessus ? </p>
        <p className="whyUser">- Pour pouvoir me concentrer sur des tâches plus intéressantes directement liées à mon patient et éventuellement rentrer chez moi plus tôt.</p>
        <p className="whyUs">- Pourquoi est-ce important pour vous ?  </p>
        <p className="whyUser">- Car j’aime me consacrer à mes patients en salle d’opération, mais le temps passé avec ma famille est primoridial. </p>
        <p className="whyUs">- Pourquoi est-ce important pour vous ? </p>
        <p className="whyUser">- Parce que le bloc opératoire est ma bulle mais sans ma famille, je n’aurai pas d’échappatoire et de moments à moi.   </p>
        <p className="whyUs">- Et pourquoi donc ?  </p>
        <p className="whyUser">- J’ai la chance d’avoir un réel impact sur les êtres humains mais je veux trouver un équilibre entre ma vie personnelle et professionnelle.</p>

        <p> Nous nous sommes inspirés du célèbre auteur Simon SINEK, qui énonce qu’au bout du cinquième « pourquoi ? », nous arrivons à un besoin universel. </p>
        <p>Après avoir défini les motivations de notre proto-persona, nous pouvons lancer notre recherche utilisateur.</p>

        <h4>l'approche</h4>
        <h2>recherche utilisateur</h2>
        <p>Suite à l’établissement du proto-persona, voici les points clés que nous avons retenu de notre recherche :</p>

        <UserResearchShiro/>

        <h2>notre persona </h2>
        <PersonaShiro/>


        <h4>la vision</h4>
        <h2> UN GAIN DE TEMPS CONSIDÉRABLE POUR LES CHIRURGIENS </h2>

        <p>Notre vision pour Shiro est de créer de l’attractivité pour les tâches administratives, d’en faire des tâches agréables et naturelles à réaliser. </p>
        <p>Nous avons décidé de commencer par le rapport des opérations. Le chirurgien s’attend à ce qu’un assistant vocal comprenne rapidement son langage et que la conversation soit fluide. Nous souhaitons développer notre assistant Shiro sur une interface accessible depuis un poste de travail (ordinateur), sous forme d’application.</p>
        <p>Avec mon équipe, nous avons l’intention de répandre les assistants vocaux dans les hôpitaux pour optimiser et moderniser le travail secondaire du corps chirurgical. </p>

        <StyledPic key={data.shiroPhotos.edges[0].node.id}>
                 <Image fluid={data.shiroPhotos.edges[0].node.childImageSharp.fluid} 
                 alt =  {data.shiroPhotos.edges[0].node.base}
                 className="img"/>
        </StyledPic>

        <h4>ELEVATOR PITCH </h4>

        <p>« Pour les chirurgiens, qui veulent optimiser leurs tâches secondaires, Shiro est un assistant vocal qui remplit rapidement les comptes-rendus opératoires. Contrairement à Google Home ou Amazon Alexa, notre solution s’inscrit dans le domaine hospitalier et est accessible sur une application.»</p>

        <h4>user story mapping</h4>
        <h2>DONNER DE LA DIMENSION AUX USER STORIES</h2>

        <p>Pour donner de la précision au backlog, j’ai listé toute les fonctionnalités de notre assistant vocal pour enregistrer un nouveau compte-rendu opératoire. 
        </p>
        <p>Les activités (en orange sur l'image ci-dessous) représentent ce que fait le chirurgien lorsqu'il arrive sur notre application: en premier il s'identifie en tant qu'opérateur principal, ensuite il demande d'ouvir un CRO vierge, puis le remplit etc. </p>
        <p>La ligne des User Stories représentent comment le chirurgien parvient à son activité : pour s'identifier, il invoque d'abord Shiro en disant "C'est parti Shiro", et seulement à ce moment-là il pourra s'identifier, remplir son compte-rendu etc. </p>
       
        <StyledPic key={data.shiroPhotos.edges[2].node.id}>
                 <Image fluid={data.shiroPhotos.edges[2].node.childImageSharp.fluid} 
                 alt =  {data.shiroPhotos.edges[2].node.base}
                 className="img"/>
        </StyledPic>

        <h4>PRIORISATION ET RELEASES</h4>
        <h2>MoSCow - MUST, SHOULD, COULD OR WOULD HAVE</h2>
        <p>En utilisant cette méthode de priorisation, j’ai découpé les users stories de la manière suivante :</p>
        <StyledPic key={data.shiroPhotos.edges[1].node.id}>
                 <Image fluid={data.shiroPhotos.edges[1].node.childImageSharp.fluid} 
                 alt =  {data.shiroPhotos.edges[1].node.base}
                 className="img"/>
        </StyledPic>
        
        <p>J’ai découpé le groupe « Must » en deux MVP dispersés sur deux sprints. En ayant choisi la haute fidélité, nos MVP se rapprocheront le plus de notre produit final. </p>
        <p>Ci-dessous se trouvent les user stories du MVP 1 dans lequel je souhaite valider le parcours qui apporte la première valeur à l’utilisateur. Ici, il s’agit des interactions entre le chirurgien et l’assistant vocal. </p>
        <h2>user stories - mvp 1</h2>
        
        <div className="wrapper">
            {getUS(us1)}
        </div>

        <h4>QUE CHERCHE T-ON À VALIDER ?</h4>
        <p>Pour chaque user stories, voici les interactions que je souhaite tester ou valider : </p>
        
        <p ><span>ACTIVATION </span>: Quelle est la meilleure manière d’invoquer Shiro ? (Oral ou via application ?)</p>
        <p ><span>IDENTIFICATION </span>: Comment s’identifie le chirurgien ?</p>
        <p ><span>RAPPORTER </span>: Par quoi commence le chirurgien pour remplir le CR ? </p>
        <h4>RÉSULTATS ATTENDUS </h4>
        <p> À la fin du premier sprint, nous comptons valider le parcours utilisateur, le début du flow conversationnel entre le chirurgien et l’assistant vocal. </p>
        
        <h2>user stories - mvp 2</h2>

        <div className="wrapper">
            {getUS(us2)}
        </div>

        <h4>QUE CHERCHE T-ON À VALIDER ?</h4>
        <p > <span>TRANSFORMATION </span>: Quelle est la meilleure façon d’afficher le texte sur l’application ? </p>
        <p > <span>FEEDBACK</span> : Que dit le chirurgien pour accéder à son historique ?</p>
        <p ><span>MODIFICATION</span> : Que dit le chirurgien pour modifier un CR ?</p>
        <h4>RÉSULTATS ATTENDUS </h4>
        <p>À la fin du deuxième sprint, nous voulons valider l’activité de transformation de la voix en texte et la collecte d’informations. Nous souhaitons également récolter des feedbacks sur la fluidité des interactions. </p>
        
        <h4>merci d'être arrivé jusque-là !</h4>

        <h2>PERSPECTIVES</h2>

        <p>J'ai décidé d'arrêter cette analyse ici puisque je voulais me concentrer sur le processus d'UX Design.  </p>
        <p>Cette étude étant la première que j'effectue pour le développement de mon portfolio, je souhaite obtenir des retours pour améliorer mes prochaines études. </p>
        <p>Alors n'hésitez pas à me donner vos avis, j'adore l'honnêteté !</p>

        </StyledShiro>
       
        
        <Footer/>
        </div>
    )
}

export default Shiro

