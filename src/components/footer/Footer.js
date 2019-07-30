import React from 'react';
import { Container, Row, Col, Form, } from 'react-bootstrap';
import { TextResponsive, ParagraphFooter, } from '../shared components/styledComponents';
import { withTranslation } from 'react-i18next';
import { ImgResponsive, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompletoBlanco.png';


function Footer({ t }) {
  return (
    <Container fluid className="bg-dark mt-5 pb-2">
      <Row className="m-auto px-4">
        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
          <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="70px" normalHeight="60px" smallHeight="60px" 
          className="my-4" />

        </Col>
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
        <Col xs={12} md={4}>
          <TextResponsive className="mt-3"
            largeHeight="30px" normalHeight="25px" smallHeight="20px" color="white">
            {t('Footer.title2')}
          </TextResponsive>
          <div class="input-group input-group-sm mt-3">
            <input type="text" class="form-control" placeholder={t('Footer.newsletter.placeholder')} aria-label="Recipient's username" aria-describedby="button-addon2" />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button" id="button-addon2">{t('Footer.newsletter.button')}</button>
            </div>
          </div>
          <div className="my-3">
            <span className="text-secondary font-italic" style={{fontSize:"14px"}} >{t('Footer.copyright')}</span><br />
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default withTranslation('translations')(Footer);