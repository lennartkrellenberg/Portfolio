import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import BackgroundImage from 'gatsby-background-image'
import '../styles/global.css'
import Button from 'react-bootstrap/Button'
import { Helmet } from "react-helmet"



const IndexPage = (props) => (
  <div>
    <Helmet>
      <title>Lennart Krellenberg</title>
      <meta name="description" content="Self-taught front-end and app developer" />
    </Helmet>
    <BackgroundImage
      className="backgroundImage"
      fluid={props.data.background.childImageSharp.fluid}
    >
      <div className="bg-image">
        <Header />
        <div className="main-content wrapper">
          <h5>Hi, I'm Lennart<span class="wave">👋🏻</span></h5>
          <h1><span>App</span> and <span>Front-End</span> Developer</h1>
          <div className="buttons">
            <Button variant="black" className="projects-btn button" size="lg" href="#projects-section">
              Projekte
    </Button>
            <Button variant="dark" size="lg" className="contact-btn button" href="#contact-section">
              Kontakt
    </Button>
          </div>
        </div>
      </div>
    </BackgroundImage>

    <div className="projects-section " id="projects-section">
      <div className="projects-content wrapper">
        <h1>Projekte</h1>
        <div className="projects-gallery">
          <div className="project">
            <h3>Leon Carstens</h3>
            <p>Das ist eine Website, die ich für den Fotografen Leon Carstens gemacht habe.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://www.leoncarstens.de">Live Page</Button>
          </div>

          <div className="project">
            <h3>travler</h3>
            <p>travler ist eine Flutter App, die einem verschiedene Städte zeigt. Das war meine erste Flutter App, die ich programmiert habe.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://github.com/lennartkrellenberg/travler">Zum Code</Button>
          </div>

          <div className="project">
            <h3>Contact-Card</h3>
            <p>Diese Visitenkarte habe ich 2018 gemacht. Es war eines meiner ersten Projekte in Richtung Webentwicklung.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://github.com/lennartkrellenberg/Contact-Card">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Leon Carstens (alt)</h3>
            <p>Dies ist die alte Seite des Fotografen Leon Carstens. Ich habe sie im August 2020 entwickelt.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://github.com/lennartkrellenberg/leoncarstens-old">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>MovieApp</h3>
            <p>In dieser App werden die aktuell beliebtesten Filme gezeigt. Die App bezieht die Daten aus der Movie Database API.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://github.com/lennartkrellenberg/MovieApp">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Mehr Projekte</h3>
            <p>Um noch mehr Projekte zu sehen, ist hier mein GitHub Account.</p>
            <Button variant="dark" size="lg" className="project-btn button" rel="noopener noreferrer" target="_blank" href="https://github.com/lennartkrellenberg">GitHub</Button>
          </div>



        </div>

      </div>
    </div>

    <div className="contact-section" id="contact-section">
      <h1 className="wrapper">Get in Touch</h1>

      <div className="contact-content wrapper">
        <p>Wenn Sie mit mir in Kontakt treten möchten, können Sie mir direkt eine E-Mail an<br /><span><a className="social-link" href="mailto:lennart@lennartkrellenberg.com">lennart@lennartkrellenberg.com senden</a></span> oder auf <span><a className="social-link" href="https:/www.linkedin.com/in/lennartkrellenberg
">LinkedIn</a></span> oder <span><a href="https://www.instagram.com/lennartkrellenberg/" className="social-link">Instagram</a></span> anschreiben</p>
        <Button variant="light" size="lg" className="email-btn button" href="mailto:lennart@lennartkrellenberg.com">
          Email
    </Button>
      </div>
    </div>

    <Footer />
  </div>


)




export default IndexPage

export const pageQuery = graphql`
    query {
      background: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `