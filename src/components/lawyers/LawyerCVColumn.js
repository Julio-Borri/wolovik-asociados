import React from 'react';
import { Col, } from 'react-bootstrap';
import styled from 'styled-components';
import { TextResponsive, } from '../shared components/styledComponents';

function LawyerCVColumn(props) {
  return (
    <React.Fragment>
      <Col xs={12} md={6} className="text-justify mb-5">
        <Img src={props.img} id={props.id} />
        <TextResponsive largeHeight="25px" normalHeight="20px" smallHeight="20px" >
          {props.member}
        </TextResponsive>
        <p style={{display: props.text1 ? "block" : "none"}}>{props.text1}</p>
        <p style={{display: props.text2 ? "block" : "none"}}>{props.text2}</p>
        <p style={{display: props.text3 ? "block" : "none"}}>{props.text3}</p>
        <p style={{display: props.text4 ? "block" : "none"}}>{props.text4}</p>
        <p style={{display: props.text5 ? "block" : "none"}}>{props.text5}</p>
        <p style={{display: props.text6 ? "block" : "none"}}>{props.text6}</p>
      </Col>
    </React.Fragment>
  )
}

export default LawyerCVColumn;

// const DivImg = styled.div`
//   background: url(${imgCv1});
//   background-position: center;
//   background-size: cover;
//   height: 200px;
//   width: 100%;
//   border: 1px solid gray;
//   @media screen and (max-width: 600px) {
//     margin-bottom: 20px;
//   };
// `

const Img = styled.img`
  height: 180px;
  width: 220px;
  border: 1px solid gray;
  float: left;
  margin-right: 30px;
  margin-bottom: 20px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    width: 100%;
  };
`