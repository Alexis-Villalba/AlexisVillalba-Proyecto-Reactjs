import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavBarTitle from './NavBarTitle';
import NavbarSections from './NavbarSections';
import './NavBar.css';

function NavBar() {
  return (<div className='barra'>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavBarTitle/>
          <Nav className="me-auto">
            <NavbarSections/>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default NavBar;