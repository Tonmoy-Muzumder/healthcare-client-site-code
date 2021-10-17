import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { HashLink } from 'react-router-hash-link';
const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
    <div>
      <h1>LININGS</h1>
      <p style={{color: 'green', marginLeft: 25}}>HEALTH<span style={{color: 'red'}}>CARE</span> </p>
    </div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home#home">HOME</Nav.Link>
      <Nav.Link href="/services#services">SERVICES</Nav.Link>
      <Nav.Link href="/services#services">SERVICES</Nav.Link>
      <Nav.Link href="/services#services">SERVICES</Nav.Link>
    </Nav>
    
    <Nav>
      <Nav.Link   href="#login">LOGIN</Nav.Link>
      <Nav.Link  eventKey={2}   href="#register">
      REGISTER
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;