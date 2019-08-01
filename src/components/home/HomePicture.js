import React from 'react';
import bgHeader from '../../img/bgWolovik2.jpg';
import { ContainerPictureHome, } from '../shared components/styledComponents';
import { withTranslation, } from 'react-i18next';

function HomePicture({ t }) {
  return (
    <ContainerPictureHome fluid bg={bgHeader}>
    </ContainerPictureHome>
  )
}

export default withTranslation('translations')(HomePicture);