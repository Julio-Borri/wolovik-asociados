import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, TextResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import { withTranslation, } from 'react-i18next';

function Newsletter({ t }) {
  return (
    <React.Fragment>
      <HeaderContainer fluid className="d-flex align-items-end justify-content-center">
        <Row>
          <Col>
            <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="100px" normalHeight="60px" smallHeight="60px" />
          </Col>
        </Row>
      </HeaderContainer>
      <Container style={{height:"50vh",}}>
      <Row>
        <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
          largeHeight="45px" normalHeight="30px" smallHeight="25px"
          style={{ height: "300px", }} >
          Proximamente
        </TextResponsive>
      </Row>
    </Container>
    </React.Fragment>
  )
}

export default withTranslation('translations')(Newsletter)