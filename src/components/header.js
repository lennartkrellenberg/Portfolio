import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.css"
import "../styles/header.css"





export default function Header() {
    return (
            
            <div className="top Navbar">
                


                <Navbar expand="md" variant="dark" className="Nav" >
                    <Navbar.Brand href="/" className=""><div className="brand"></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarReponsive" />
                    <Navbar.Collapse id="navbarReponsive">
                        <Nav className="ml-auto navbar" as="ul">
                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="#Home">Home</Link>
                            </Nav.Item>

                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="#projects-section">Projekte</Link>
                            </Nav.Item>


                            <Nav.Item as="li" >
                                <Link className="nav-link" activeClassName="active" to="#contact-section">Kontakt</Link>
                            </Nav.Item>
                        </Nav>



                    </Navbar.Collapse>

                </Navbar>



            </div>





    )
}