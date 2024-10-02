import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-4">
    <Container>
      <Row>
       
        <Col  className="col-md-3" style={{borderRight:'1px solid white'}}>
          <h5>Sobre Nosotros</h5>
          <ul className="list-unstyled">
            <li><a href="#">Quiénes Somos</a></li>
            <li><a href="#">Nuestra Historia</a></li>
            <li><a href="#">Nuestro Equipo</a></li>
          </ul>
        </Col>

       
        <Col  className="col-md-3" style={{borderRight:'1px solid white'}}>
          <h5>Enlaces Rápidos</h5>
          <ul className="list-unstyled">
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Política de Envío</a></li>
            <li><a href="#">Devoluciones</a></li>
          </ul>
        </Col>

        
        <Col  className="col-md-3" style={{borderRight:'1px solid white'}}>
          <h5>Ayuda y Soporte</h5>
          <ul className="list-unstyled">
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Asistencia Técnica</a></li>
          </ul>
        </Col>

       
        <Col className="col-md-3" >
          <h5>Empresa</h5>
          <ul className="list-unstyled">
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </Col>
      </Row>

      <Row className="pt-3">
        <Col className="text-center">
          <p>© 2024 EasyMart. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
  );
}

export default Footer;
