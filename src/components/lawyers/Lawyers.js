import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, TextResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import { withTranslation, } from 'react-i18next';
import LawyerList from './LawyerList';
import LawyerPicture from './LawyerPicture';
import LawyerCV from './LawyerCV';
import LawyerCVColumn from './LawyerCVColumn';

function Lawyers({ t }) {
  const associatesCVs1 = t('lawyers.associates.members', { returnObjects: true }).slice(0, 3).map(
    item => <LawyerCVColumn item={item} />)
  const ofCounselCvs1 = t('lawyers.ofCounsel.members', { returnObjects: true }).slice(0, 3).map(
    item => <LawyerCVColumn item={item} />)


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
      <Container className="mt-5 px-4">
        <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="my-5">
          {t('lawyers.partners.title')}
        </TextResponsive>
        <LawyerCV />
      </Container>
      <Container className="mt-5 px-4">
        <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-5">
          {t('lawyers.associates.title')}
        </TextResponsive>
        <Row>
          {associatesCVs1}
        </Row>
      </Container>
      <Container className="mt-5 px-4">
        <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-5">
          {t('lawyers.ofCounsel.title')}
        </TextResponsive>
        <Row>
          {ofCounselCvs1}
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default withTranslation('translations')(Lawyers)

