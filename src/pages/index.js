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
    <Button variant="black" className="projects-btn button" size="lg">
      Projekte
    </Button>{' '}
    <Button variant="dark" size="lg" className="contact-btn button">
      Kontakt
    </Button>
      </div>
      </div>
      </div>
    </BackgroundImage>

    <div className="projects-section">
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