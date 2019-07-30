import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { TextResponsive, } from '../shared components/styledComponents';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

function MainEstudio({ t }) {
  return (
    <Container className="mt-5 px-5" style={{maxWidth: "1000px",}}>
      <Row className="mb-3">
        <Col>
          <TextResponsive largeHeight="40px" normalHeight="30px" smallHeight="25px">
            {t('MainEstudio.title')}
          </TextResponsive>
        </Col>
      </Row>
      <Row className="text-justify text-secondary" >
        <Col md={6} xs={12}>
          <ResponsiveDiv1>
            <p>{t('MainEstudio.text1')}</p>
            <p>{t('MainEstudio.text2')}</p>
            <p>{t('MainEstudio.text3')}</p>
          </ResponsiveDiv1>
        </Col>
        <Col md={6} xs={12}>
          <ResponsiveDiv2>
            <p>{t('MainEstudio.text4')}</p>
            <p>{t('MainEstudio.text5')}</p>
            <p>{t('MainEstudio.text6')}</p>
          </ResponsiveDiv2>
        </Col>
      </Row>
    </Container>
  )
}

export default withTranslation('translations')(MainEstudio);

const ResponsiveDiv1 = styled.div`
  padding-right: 25px;
  @media screen and (max-width: 600px) {
    padding-right: 0px;
    font-size: 14px;
  }
`

const ResponsiveDiv2 = styled.div`
  padding-left: 25px;
  @media screen and (max-width: 600px) {
    padding-left: 0px;
    font-size: 14px;
  }
`