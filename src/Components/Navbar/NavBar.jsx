import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carrito from './Carrito/Carrito';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
  const {navItems} = props
  const navigate = useNavigate()
  
  return (<div className='barra'>
    
    <Navbar bg="dark" variant="dark" className='d-flex flex-row flex-wrap justify-content-around'>
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
                      <div>
                      { name === "Categorías" ? (
  <NavDropdown title={name} id={index}>
    <NavDropdown.Item onClick={()=>navigate(`/categoria/Aceites`)}>Aceites</NavDropdown.Item>
    <NavDropdown.Item onClick={()=>navigate(`/categoria/ArticulosDeLimpieza`)}>
      Artículos de limpieza
    </NavDropdown.Item>
    <NavDropdown.Item onClick={()=>navigate(`/categoria/Lacteos`)}>Lácteos</NavDropdown.Item>
    <NavDropdown.Item onClick={()=>navigate(`/categoria/Alimentos`)}>
      Alimentos
    </NavDropdown.Item>
  </NavDropdown>
) : (
  <Nav.Link className="nav-link" href={path}>{name}</Nav.Link>
)}
                      </div>
                    </li>
                  ))
                  
                }
<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Carrito/>
              </ul>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
      </div>
  )
}

export default NavBar;