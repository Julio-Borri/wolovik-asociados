import React from 'react';
import { Carousel, Container, } from 'react-bootstrap';
import { TextResponsive, } from '../shared components/styledComponents';
import { withTranslation } from 'react-i18next';

function CarouselHome({ t }) {
  return (
    <Container fluid style={{ height: "300px", }}>
      <Carousel style={{ height: "300px", }}>
        <Carousel.Item>
          <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
            largeHeight="45px" normalHeight="30px" smallHeight="25px"
            style={{ height: "300px", }} >
            {t('Carousel.text1')}
          </TextResponsive>
        </Carousel.Item>
        <Carousel.Item>
          <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
            largeHeight="45px" normalHeight="30px" smallHeight="25px"
            style={{ height: "300px", }} >
            {t('Carousel.text2')}
          </TextResponsive>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default withTranslation('translations')(CarouselHome);