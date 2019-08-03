import React from 'react';
import bgHeader from '../../img/bgWolovik2.jpg';
import { ContainerPictureHome2, TextResponsiveWhiteShadow, } from '../shared components/styledComponents';
import { withTranslation, } from 'react-i18next';
import { Container, } from 'react-bootstrap';

function HomePicture({ t }) {
  return (
    <ContainerPictureHome2 fluid bg={bgHeader}>
      <Container className="mt-5">
      <TextResponsiveWhiteShadow className="m-auto text-justify"
            largeHeight="22px" normalHeight="20px" smallHeight="16px">
            {t('Carousel.text3')}<br /><br />
            {t('Carousel.text4')}<br /><br />
            {t('Carousel.text5')}
          </TextResponsiveWhiteShadow>
      </Container>
       

    </ContainerPictureHome2>
  )
}

export default withTranslation('translations')(HomePicture);