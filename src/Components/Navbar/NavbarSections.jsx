import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carrito from './Carrito/Carrito';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavbarSections = () => {
  return (
    <div className="d-flex">
      <Navbar.Brand href="/">MaxiKiosco Ilolay</Navbar.Brand>
      <NavLink to="/Categorias">Categorías</NavLink>
      <NavLink to="/Nosotros">Nosotros</NavLink>
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