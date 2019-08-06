import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
import { withTranslation, } from 'react-i18next';

// Componente que representa 1 articulo
import Article from './Article';

// trae la info desde el archivo json
import data from '../../newsletterData.json';

function Newsletter({ t }) {

  // const listadoArticulos : define la constante
  // data.newsletters accede a la info
  // .map recorre el array y por cada objeto te devuelve 1 objeto del tipo Article.
  const listadoArticulos = data.newsletters.map(item => <Article item={item} />)

  return (
    <React.Fragment>
      <HeaderContainer fluid className="d-flex align-items-end justify-content-center">
        <Row>
          <Col>
            <ImgResponsive src={brandLogo} alt="Brand Logo" largeHeight="100px" normalHeight="60px" smallHeight="60px" />
          </Col>
        </Row>
      </HeaderContainer>
      <Container className="mt-5">
       {listadoArticulos}
      </Container>
    </React.Fragment>
  )
}

export default withTranslation('translations')(Newsletter)