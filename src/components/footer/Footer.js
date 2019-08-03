import React from 'react';
import { Container, Row, } from 'react-bootstrap';
import ClientsSlider from './ClientsSlider';
import Col1Brand from './Col1Brand';
import Col2Contact from './Col2Contact';
import Col3Suscribe from './Col3Suscribe';

function Footer() {
  return (
    <Container fluid className="bg-dark mt-5 pb-2">
      <ClientsSlider />
      <Row className="m-auto px-4">
        <Col1Brand />
        <Col2Contact />
        <Col3Suscribe />
      </Row>
    </Container>
  )
}

export default Footer;

