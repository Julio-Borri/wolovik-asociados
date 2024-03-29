import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import ListItemLawyers from './ListItemLawyers';
import { withTranslation, } from 'react-i18next';
import { TextResponsive, } from '../shared components/styledComponents';

function LawyerList({ t }) {

  const partnersList = t('lawyers.partners.members', { returnObjects: true }).map(
    item => <ListItemLawyers item={item} />)
  const associatesList = t('lawyers.associates.members', { returnObjects: true }).map(
    item => <ListItemLawyers item={item} />)
  const externalList = t('lawyers.external.members', { returnObjects: true }).map(
    item => <ListItemLawyers item={item} />)

  return (
    <Container className="my-5 ">
      <Row className="px-3 mt-5 mx-auto d-flex justify-content-center">
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <div>
            <TextResponsive largeHeight="30px" normalHeight="25px" smallHeight="25px" className="mb-3">
              {t('lawyers.partners.title')}
            </TextResponsive>
            <p>{partnersList}</p>
          </div>
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <div>
            <TextResponsive largeHeight="30px" normalHeight="25px" smallHeight="25px" className="mb-3">
              {t('lawyers.associates.title')}
            </TextResponsive>
            <p>{associatesList}</p>
          </div>
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <div>
            <TextResponsive largeHeight="30px" normalHeight="25px" smallHeight="25px" className="mb-3">
              {t('lawyers.external.title')}
            </TextResponsive>
            <p>{externalList}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default withTranslation('translations')(LawyerList)