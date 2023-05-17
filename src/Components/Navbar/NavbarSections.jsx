import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carrito from './Carrito/Carrito';


const NavbarSections = () => {
  return (
    <div className="d-flex">
      <Nav.Link href="#Categorías">Categorías</Nav.Link>
      <Nav.Link href="#Contacto">Contacto</Nav.Link>
      <Nav.Link href="#Nosotros">Nosotros</Nav.Link>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
      <Carrito/>
    </div>
  )
}

export default NavbarSections;