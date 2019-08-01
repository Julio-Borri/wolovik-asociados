import React from 'react';
import Header from './Header';
import CarouselHome from './CarouselHome';
import MainEstudio from './MainEstudio';
import HomePicturePlusText from './HomePicturePlusText';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <HomePicturePlusText />
      <MainEstudio />
    </React.Fragment>
  )
}
