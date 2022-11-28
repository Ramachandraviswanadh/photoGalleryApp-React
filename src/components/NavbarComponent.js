

import { Container, Navbar, Nav } from "react-bootstrap"

import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHPKP8BnK-fyWsW5P2SujCDlwwQUlXHhIzPhLo4nC7Fha8AlFQwKjcukHlf8FPRTM-lM&usqp=CAU"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Photo Gallery App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent