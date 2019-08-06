import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import styled from 'styled-components';

// Componente que representa un artículo, sin formato css, bien crudo.
export default function Article(props) {
  return (
    <Row>
       <Col xs={2}>
        <FechaNewsletter className="text-right">{props.item.fecha}</FechaNewsletter>
      </Col>
      <Col xs={10} >
        <ArticuloNewsletter className="text-justify">
          <TituloNewsletter>{props.item.titulo}</TituloNewsletter>
          <SubtituloNewsletter>{props.item.tipoderecho}</SubtituloNewsletter>
          {props.item.contenido}
        </ArticuloNewsletter>
      </Col>
    </Row>
  )
}


const TituloNewsletter = styled.h2`
  color: var(--mainBlue);
  font-size: 25px;
  font-family: 'Times New Roman', 'TimesNewRoman',Times,'Baskerville',Georgia,serif; 
  font-style: italic; 
  letter-spacing: -1px;
`
const FechaNewsletter = styled.h2`
  color: var(--mainBlue);
  font-size: 16px;
`

const SubtituloNewsletter = styled.h3`
  font-size: 16px;
  color: var(--mainGray);
`

const ArticuloNewsletter = styled.p`
  margin-bottom: 60px;
`