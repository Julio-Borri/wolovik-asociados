import React from 'react';
import Header from './Header';
import CarouselHome from './CarouselHome';
import HomePicture from './HomePicture';
import MainEstudio from './MainEstudio';
import DivisionCobranzas from './DivisionCobranzas';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <CarouselHome />
      <HomePicture />
      <MainEstudio />
      <DivisionCobranzas />
    </React.Fragment>
  )
}
