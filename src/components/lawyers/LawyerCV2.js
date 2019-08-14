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
        <Col>
          <Img src={imgCv1} />
          <TextResponsive largeHeight="25px" normalHeight="25px" smallHeight="25px" className="mb-3">
            {t('lawyers.partners.members.0.member')}
          </TextResponsive>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text1')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text2')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text3')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text4')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text5')}</p>
          <p className="text-justify mt-3">{t('lawyers.partners.members.0.text6')}</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default withTranslation('translations')(LawyerCV);

const Img = styled.img`
  height: 180px;
  width: 220px;
  border: 1px solid gray;
  float: left;
  margin-right: 30px;
  margin-bottom: 20px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    width: 100%;
  };
`