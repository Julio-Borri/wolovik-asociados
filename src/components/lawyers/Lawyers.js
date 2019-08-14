import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, TextResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import { withTranslation, } from 'react-i18next';
import LawyerList from './LawyerList';
import LawyerPicture from './LawyerPicture';
import LawyerCV2 from './LawyerCV2';
import LawyerCVColumn from './LawyerCVColumn';
import data from '../../informacion';

function Lawyers({ t }) {
  // const associatesCVs1 = t('lawyers.associates.members', { returnObjects: true }).slice(0, 3).map(
  //   item => <LawyerCVColumn item={item} />)

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
        <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="my-4">
          {t('lawyers.partners.title')}
        </TextResponsive>
        <LawyerCV2 />
      </Container>
      <Container className="mt-5 px-4">
        <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-5">
          {t('lawyers.associates.title')}
        </TextResponsive>
        <Row>
          {/* {associatesCVs1} */}
          <LawyerCVColumn 
            img={data.cvImg[0].img} 
            id={t('lawyers.associates.members.0.id')} 
            member={t('lawyers.associates.members.0.member')} 
            text1={t('lawyers.associates.members.0.text1')} 
            text2={t('lawyers.associates.members.0.text2')} 
            text3={t('lawyers.associates.members.0.text3')} 
            text4={t('lawyers.associates.members.0.text4')} 
            text5={t('lawyers.associates.members.0.text5')} 
            text6={t('lawyers.associates.members.0.text6')} 
          /> 
          <LawyerCVColumn 
            img={data.cvImg[1].img} 
            id={t('lawyers.associates.members.1.id')} 
            member={t('lawyers.associates.members.1.member')} 
            text1={t('lawyers.associates.members.1.text1')} 
            text2={t('lawyers.associates.members.1.text2')} 
            text3={t('lawyers.associates.members.1.text3')} 
            text4={t('lawyers.associates.members.1.text4')} 
          /> 
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default withTranslation('translations')(Lawyers)

