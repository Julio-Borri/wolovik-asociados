import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, TextResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';

export default function Lawyers() {
  return (
    <Container style={{height:"80vh",}}>
      <Row >
        <Col className="d-flex align-items-end justify-content-center" style={{marginTop:"180px",}}>
          <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="100px" normalHeight="60px" smallHeight="60px" />
        </Col>
      </Row>
      <Row>
        <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
          largeHeight="45px" normalHeight="30px" smallHeight="25px"
          style={{ height: "300px", }} >
          Proximamente
        </TextResponsive>
      </Row>
    </Container>
  )
}
