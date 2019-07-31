import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';

export default function Header() {
  return (
    <HeaderContainer fluid className="d-flex align-items-end justify-content-center">
      <Row>
        <Col>
          <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="100px" normalHeight="60px" smallHeight="60px" />
        </Col>
      </Row>
    </HeaderContainer>
  )
}

