import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import imgCv1 from '../../img/ValentinaWolovik.png';
import styled from 'styled-components';
import { withTranslation, } from 'react-i18next';
import { TextResponsive, } from '../shared components/styledComponents';

function LawyerCV({ t }) {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={4}>
          <DivImg></DivImg>
        </Col>
        <Col xs={12} md={8}>
          <TextResponsive largeHeight="25px" normalHeight="20px" smallHeight="20px" className="mb-3">
            {t('lawyers.partners.members.0.member')}
          </TextResponsive>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text1')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text2')}</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-justify mt-3">
          <p>{t('lawyers.partners.members.0.text3')}</p>
          <p>{t('lawyers.partners.members.0.text4')}</p>
          <p>{t('lawyers.partners.members.0.text5')}</p>
          <p>{t('lawyers.partners.members.0.text6')}</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default withTranslation('translations')(LawyerCV);

const DivImg = styled.div`
  background: url(${imgCv1});
  background-position: center;
  background-size: cover;
  height: 230px;
  width: 100%;
  border: 1px solid gray;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  };
`