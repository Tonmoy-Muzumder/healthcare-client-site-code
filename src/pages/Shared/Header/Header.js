import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const login = <FontAwesomeIcon icon={faUser} />
  const lock = <FontAwesomeIcon icon={faLock} />
 
   
    return (
        <>
          <Navbar  sticky="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Container>
                <Navbar.Brand as={HashLink} to="/home#home">
             <div>
            <h1 className='m-0'>LININGS</h1>
               <p style={{color: 'green', marginLeft: 25}}>HEALTH<span style={{color: 'red'}}>CARE</span> </p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
      <Nav.Link as={HashLink} to="/doctors">DOCTORS</Nav.Link>
      <Nav.Link as={HashLink} to="/shops">SHOP</Nav.Link>     
      <Nav.Link as={HashLink} to="/login#login"> {login} | LOGIN </Nav.Link>
      <Nav.Link as={HashLink} to="/register#register"> {lock} | REGISTER</Nav.Link>
      
    </Nav>
    <Nav>
    <Navbar.Text>
        Signed in as: {login} <a href="#login">{}
        <br />{}</a>  
    </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;