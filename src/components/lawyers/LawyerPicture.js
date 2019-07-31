import React from 'react';
import bgHeader from '../../img/bgWolovik1.jpg';
import { ContainerPictureHome, } from '../shared components/styledComponents';

export default function HomePicture() {
  return (
    <ContainerPictureHome fluid bg={bgHeader} />
  )
}
