import React from 'react';
import { Col, } from 'react-bootstrap';
import imgCv1 from '../../img/ValentinaWolovik.png';
import styled from 'styled-components';
import { TextResponsive, } from '../shared components/styledComponents';

function LawyerCVColumn(props) {
  return (
    <React.Fragment>
      <Col xs={12} md={4} className="text-justify mb-5">
        <DivImg id={props.item.id}></DivImg>
        <TextResponsive largeHeight="25px" normalHeight="20px" smallHeight="20px" className="my-3" >
          {props.item.member}
        </TextResponsive>
        <p>{props.item.text1}</p>
        <p>{props.item.text2}</p>
        <p>{props.item.text3}</p>
        <p>{props.item.text4}</p>
      </Col>
    </React.Fragment>
  )
}

export default LawyerCVColumn;

const DivImg = styled.div`
  background: url(${imgCv1});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
  border: 1px solid gray;
  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  };
`