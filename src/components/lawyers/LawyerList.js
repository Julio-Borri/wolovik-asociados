import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import ListItemLawyers from './ListItemLawyers';
import { withTranslation, } from 'react-i18next';
import { TextResponsive, } from '../shared components/styledComponents';

function LawyerList({ t }) {
  
  const partnersList = t('lawyers.partners.members', { returnObjects: true }).map(
    item => <ListItemLawyers text={item.member} />)
  const associatesList = t('lawyers.associates.members', { returnObjects: true }).map(
    item => <ListItemLawyers text={item.member} />)
  const ofCounselList = t('lawyers.ofCounsel.members', { returnObjects: true }).map(
    item => <ListItemLawyers text={item.member} />)

  return (
    <Container className="my-5">
        <Row className="px-3 mt-5">
          <Col xs={12} md={4}>
            <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-3">
              {t('lawyers.partners.title')}
            </TextResponsive>
            <p>{partnersList}</p>
          </Col>
          <Col xs={12} md={4}>
            <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-3">
              {t('lawyers.associates.title')}
            </TextResponsive>
            <p>{associatesList}</p>
          </Col>
          <Col xs={12} md={4}>
            <TextResponsive largeHeight="35px" normalHeight="30px" smallHeight="30px" className="mb-3">
              {t('lawyers.ofCounsel.title')}
            </TextResponsive>
            <p>{ofCounselList}</p>
          </Col>
        </Row>
      </Container>
  )
}

export default withTranslation('translations')(LawyerList)