import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import { withTranslation, } from 'react-i18next';
import LawyerList from './LawyerList';
import LawyerPicture from './LawyerPicture';
import LawyerCV from './LawyerCV';

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
      <LawyerList />
      <LawyerPicture />
      <LawyerCV />
    </React.Fragment>
  )
}

export default withTranslation('translations')(Lawyers)

