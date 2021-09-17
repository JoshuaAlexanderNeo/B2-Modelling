import React from "react"
import { Link } from 'gatsby'
import { Navbar, Nav, Container } from "react-bootstrap"
import * as headerStyles from "./header.module.scss"

import { StaticImage } from "gatsby-plugin-image"


const Header = () => {
  return (
<Navbar  className={headerStyles.header}  variant="dark" expand="lg">
  <Container>
    <Navbar.Brand><Link to="/"><StaticImage className="navLogo" src="../assets/B2.png" alt="logo"></StaticImage></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>    
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/models">Models</Link> 
        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Get Scouted</Link>
        <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="https://b2-modelling.myshopify.com/">Shop</a>   
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
