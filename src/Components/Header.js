import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src='https://rainbowit.net/html/inbio/assets/images/logo/logo-dark.png' alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#whatido">What I Do</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button className='border-0 rounded-pill mx-3'>Download CV</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default Header

