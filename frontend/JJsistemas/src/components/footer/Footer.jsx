import React from 'react';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
                <Nav className="me-auto textColor">
                    <span>Todos los derechos reservdos - JJsistemas</span>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Footer