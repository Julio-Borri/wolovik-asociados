import React from 'react';
import { Col, } from 'react-bootstrap';
import { TextResponsive, } from '../shared components/styledComponents';
import { withTranslation, } from 'react-i18next';

function Col3Suscribe({ t }) {
  return (
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
        <span className="text-secondary font-italic" style={{ fontSize: "14px" }} >{t('Footer.copyright')}</span><br />
      </div>
    </Col>
  )
}

export default withTranslation('translations')(Col3Suscribe);
