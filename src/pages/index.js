import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import BackgroundImage from 'gatsby-background-image'
import '../styles/global.css'
import Button from 'react-bootstrap/Button'



const IndexPage = (props) => (
  <div>
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

    <div className="projects-section wrapper" id="projects-section">
      <div className="projects-content wrapper">
        <h1>Projekte</h1>
        <div className="projects-gallery">
          <div className="project">
            <h3>Leon Carstens</h3>
            <p>A Gatsby website for the photographer Leon Carstens.</p>
            <Button variant="dark" size="lg" className="project-btn button" href="https://www.leoncarstens.de">Live Page</Button>
          </div>

          <div className="project">
            <h3>travler</h3>
            <p>It's a flutter app that lets you find cities and rate them. You also have the possibility to look at them more closely</p>
            <Button variant="dark" size="lg" className="project-btn button" href="https://github.com/lennartkrellenberg/travler">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Contact-Card</h3>
            <p>This has been one of my first projects. It is a simple contact card with social media links.</p>
            <Button variant="dark" size="lg" className="project-btn button" href="https://github.com/lennartkrellenberg/Contact-Card">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Drum Kit</h3>
            <p>A simple Drum Kit that I built using the tutorial from Wesbos.</p>
            <Button variant="dark" size="lg" className="project-btn button" href="https://github.com/lennartkrellenberg/drumkit">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>MovieApp</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>All Projects</h3>
            <p>To see more projects from me, you can go to my GitHub account</p>
            <Button variant="dark" size="lg" className="project-btn button" href="https://github.com/lennartkrellenberg">GitHub</Button>
          </div>



        </div>

      </div>
    </div>

    <div className="contact-section" id="contact-section">
      <h1 className="wrapper">Get in Touch</h1>

      <div className="contact-content wrapper">
        <p>If you’d like to get in touch, you can send me an email directly at<br /><span><a className="social-link" href="mailto:lennart@lennartkrellenberg.com">lennart@lennartkrellenberg.com</a></span> or contact me on <span><a className="social-link" href="https:/www.linkedin.com/in/lennartkrellenberg
">LinkedIn</a></span> or <span><a href="https://www.instagram.com/lennartkrellenberg/" className="social-link">Instagram</a></span></p>
        <Button variant="light" size="lg" className="email-btn button" href="mailto:lennart@lennartkrellenberg.com">
          Contact Me
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