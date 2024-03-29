import React from 'react';
import { Carousel, Container, } from 'react-bootstrap';
import { TextResponsive, } from '../shared components/styledComponents';
import { withTranslation } from 'react-i18next';

function CarouselHome({ t }) {
  return (
    <Container fluid style={{ height: "300px", maxWidth: "1200px",}}>
      <Carousel style={{ height: "300px", }} interval="7000" >
        <Carousel.Item>
          <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
            largeHeight="40px" normalHeight="25px" smallHeight="25px"
            style={{ height: "300px", }} >
            {t('Carousel.text3')}
          </TextResponsive>
        </Carousel.Item>
        <Carousel.Item>
          <TextResponsive className="w-75 m-auto d-flex align-items-center justify-content-center"
            largeHeight="35px" normalHeight="25px" smallHeight="20px"
            style={{ height: "300px", }} >
            {t('Carousel.text4')}
          </TextResponsive>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default withTranslation('translations')(CarouselHome);