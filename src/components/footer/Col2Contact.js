import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import { TextResponsive, ParagraphFooter, } from '../shared components/styledComponents';
import { withTranslation, } from 'react-i18next';

function Col2Contact({ t }) {
  return (
    <Col xs={12} md={4}>
      <TextResponsive className="mt-3"
        largeHeight="30px" normalHeight="25px" smallHeight="20px" color="white">
        {t('Footer.title1')}
      </TextResponsive>
      <Row>
        <Col xs={6}>
          <ParagraphFooter>
            <span className="text-secondary">{t('Footer.direction1.title')}</span><br />
            {t('Footer.direction1.direction')}<br />
            {t('Footer.direction1.neighborhood')}<br />
            {t('Footer.direction1.city')}<br />
            {t('Footer.direction1.country')}
          </ParagraphFooter>
          <ParagraphFooter>
            <span className="text-secondary">{t('Footer.telephone.title')}</span><br />
            {t('Footer.telephone.number')}<br />
          </ParagraphFooter>
        </Col>
        <Col xs={6}>
          <ParagraphFooter>
            <span className="text-secondary">{t('Footer.direction2.title')}</span><br />
            {t('Footer.direction2.direction')}<br />
            {t('Footer.direction2.neighborhood')}<br />
            {t('Footer.direction2.city')}<br />
            {t('Footer.direction2.country')}
          </ParagraphFooter>
        </Col>
      </Row>
    </Col>
  )
}

export default withTranslation('translations')(Col2Contact);