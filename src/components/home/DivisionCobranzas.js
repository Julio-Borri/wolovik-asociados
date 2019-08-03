import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { TextResponsive, } from '../shared components/styledComponents';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

function DivisionCobranzas({ t }) {
  return (
    <Container className="mt-5 px-4" style={{maxWidth: "1000px",}}>
      <Row className="mb-3">
        <Col>
          <TextResponsive largeHeight="40px" normalHeight="30px" smallHeight="25px">
            {t('MainEstudio.title2')}
          </TextResponsive>
        </Col>
      </Row>
      <Row className="text-justify text-secondary" >
        <Col md={6} xs={12}>
          <ResponsiveDiv1>
            <p>{t('cobranzas.text1')}</p>
          </ResponsiveDiv1>
        </Col>
        <Col md={6} xs={12}>
          <ResponsiveDiv2>
            <p>{t('cobranzas.text2')}</p>
            <p>{t('cobranzas.text3')}</p>
          </ResponsiveDiv2>
        </Col>
      </Row>
    </Container>
  )
}

export default withTranslation('translations')(DivisionCobranzas);

const ResponsiveDiv1 = styled.div`
  font-size: 16px;
  padding-right: 25px;
  @media screen and (max-width: 767px) {
    padding-right: 0px;
    font-size: 14px;
  }
`

const ResponsiveDiv2 = styled.div`
  font-size: 16px;
  padding-left: 25px;
  @media screen and (max-width: 767px) {
    padding-left: 0px;
    font-size: 14px;
  }
`