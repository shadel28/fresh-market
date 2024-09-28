import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="px-4">
      <Navbar.Brand href="#">fresh-market</Navbar.Brand>
      <Form className="d-flex ml-auto">
        <FormControl type="search" placeholder="Buscar productos..." className="mr-2" />
        <Button variant="outline-success" style={{marginLeft:'5%'}}>Buscar</Button>
      </Form>
      <div className="ml-auto d-flex align-items-center" style={{marginLeft:'50%'}}>
        <Button variant="outline-primary" className="mx-2">🛒Carrito</Button>
        <Button variant="outline-secondary" style={{borderRadius:'20px'}}>Iniciar Sesión</Button>
      </div>
    </Navbar>
  );
}

export default Header;
