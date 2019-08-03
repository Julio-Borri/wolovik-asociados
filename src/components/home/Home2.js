import React from 'react';
import Header from './Header';
import MainEstudio from './MainEstudio';
import DivisionCobranzas from './DivisionCobranzas';
import HomePicturePlusText from './HomePicturePlusText';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HomePicturePlusText />
      <MainEstudio />
      <DivisionCobranzas />
    </React.Fragment>
  )
}
