import React from 'react';
import { Col, } from 'react-bootstrap';
import { ImgResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompletoBlanco.png';

export default function Col1Brand() {
  return (
    <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
      <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="70px" normalHeight="60px" smallHeight="60px"
        className="my-4" />
    </Col>
  )
}
