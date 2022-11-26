import React from 'react'
import {Container,Nav, Navbar} from 'react-bootstrap';

const NavbarComponent =()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHPKP8BnK-fyWsW5P2SujCDlwwQUlXHhIzPhLo4nC7Fha8AlFQwKjcukHlf8FPRTM-lM&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'  '}Photo Gallery App
            </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          
         
        </Nav>
        <Nav>
          <Nav.Link href="">About Us</Nav.Link>
          <Nav.Link href="">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
