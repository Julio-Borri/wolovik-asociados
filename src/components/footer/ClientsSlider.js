import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import { TextResponsiveNone, } from '../shared components/styledComponents';
import styled, { keyframes, } from 'styled-components';
import { withTranslation, } from 'react-i18next';
import data from '../../informacion';
import ClientsLogo from './ClientsLogo';


function ClientsSlider({ t }) {

  const ListOfClients = data.clients.map(
    item => <ClientsLogo item={item} />)

  return (
    <Row className="bg-light">
      <Col xs={12} md={3} className="my-auto text-center">
        <TextResponsiveNone 
          largeHeight="20px" normalHeight="20px" smallHeight="18px" color="gray">
          {t('Footer.clients')}
        </TextResponsiveNone>
      </Col>
      <Col xs={12} md={9}>
        <SliderEmpresas>
          <ClientesDiv className="d-flex align-items-center">
            <div className="d-flex ">
              {ListOfClients}
              {ListOfClients}
            </div>

          </ClientesDiv>

        </SliderEmpresas>
      </Col>
    </Row>
  )
}

export default withTranslation('translations')(ClientsSlider)


const SliderEmpresas = styled.div`
  height: 100px;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`

const slideshow = keyframes`
  0%    { left: 0; }
  100%  { left: ${-150 * data.clients.length}px; }
`

const ClientesDiv = styled.div`
position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  transform: translate3d(0, 0, 0);
  animation: ${slideshow} 30s linear infinite;
`