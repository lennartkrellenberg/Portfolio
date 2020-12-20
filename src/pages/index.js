import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from '../components/header.js'
import BackgroundImage from 'gatsby-background-image'
import '../styles/global.css'
import Button from 'react-bootstrap/Button'



const IndexPage = (props) => (
  <div >
    <BackgroundImage
      className="backgroundImage"
      fluid={props.data.background.childImageSharp.fluid}
    >
      <div className="bg-image">
      <Header/>
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
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

          <div className="project">
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
            <Button variant="dark" size="lg" className="project-btn button">Mehr dazu</Button>
          </div>

         
        </div>
        
      </div>
    </div>

    <div className="contact-section" id="contact-section">
      <h1 className="wrapper">Get in Touch</h1>

      <div className="contact-content wrapper">
        <p>If you’d like to get in touch, you can send me an email directly at<br/><span><a className="social-link" href="mailto:lennart@lennartkrellenberg.com">lennart@lennartkrellenberg.com</a></span> or contact me on <span><a className="social-link" href="https:/www.linkedin.com/in/lennartkrellenberg
">LinkedIn</a></span> or <span><a href="https://www.instagram.com/lennartkrellenberg/" className="social-link">Instagram</a></span></p>
        <Button variant="light" size="lg" className="email-btn button" href="mailto:lennart@lennartkrellenberg.com">
      Contact Me
    </Button>
      </div>
    </div>
  </div>


)




export default IndexPage

export const pageQuery = graphql`
    query {
      background: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `