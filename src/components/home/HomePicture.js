import React from 'react';
import { Container, } from 'react-bootstrap';
import styled from 'styled-components';
import bgHeader from '../../img/bgWolovik2.jpg';

export default function HomePicture() {
  return (
    <ContainerPictureHome fluid>
    
    </ContainerPictureHome>
  )
}

const ContainerPictureHome = styled(Container)`
  height: 400px;
  background: linear-gradient(to bottom, white, rgba(127, 127, 213, 0.6), rgba(134, 168, 231, 0.6)), url(${bgHeader});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
