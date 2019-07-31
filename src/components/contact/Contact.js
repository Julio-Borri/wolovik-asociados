import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, TextResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import ContactForm from './ContactForm';
import { withTranslation, } from 'react-i18next';

function Lawyers({ t }) {
  return (
    <React.Fragment>
      <HeaderContainer fluid className="d-flex align-items-end justify-content-center">
        <Row>
          <Col>
            <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="100px" normalHeight="60px" smallHeight="60px" />
          </Col>
        </Row>
      </HeaderContainer>
      <ContactForm />

    </React.Fragment>
  )
}

export default withTranslation ('translations')(Lawyers);