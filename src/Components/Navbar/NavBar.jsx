import React from 'react';
import './NavBar.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const {navItems} = props
  
  return (<div className='barra'>
    
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">MaxiKiosco Ilolay</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
              <ul className='navbar-nav'>
                {
                  navItems.map(({path,name},index)=>(
                    <li key={index} className='nav-item'>
                      <Nav.Link to={path}>{name}</Nav.Link>
                    </li>
                  ))
                }

              </ul>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ;
      </div>
  );
}

export default NavBar;