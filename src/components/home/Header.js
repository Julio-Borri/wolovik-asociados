import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import styled from 'styled-components';

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

const HeaderContainer = styled(Container)`
  height: 250px;
  @media screen and (max-width: 992px) {
    height: 200px;
  };
  @media screen and (max-width: 600px) {
    height: 170px;
  };

`