import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { ImgResponsive, HeaderContainer, } from '../shared components/styledComponents';
import brandLogo from '../../img/WolovikLogoCompleto.png';
// import { withTranslation, } from 'react-i18next';

import Article from './Article';
// import data from '../../newsletterData.json';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [],
      recuperado: false
    }
  }

  componentWillMount() {
    fetch('/react/estudiowolovik/index.php/cargarNewsletters')
      .then(response => response.json())
      .then(art => this.setState({
        articulo: art,
        recuperado: true
      }))
  }

  render() {
    
    const listadoArticulos = this.state.articulos.map(item => <Article key={item.id_id_newsletter} item={item} />)

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
}

export default Newsletter;