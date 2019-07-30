import React from 'react';
import Header from './Header';
import CarouselHome from './CarouselHome';
import HomePicture from './HomePicture';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <CarouselHome />
      <HomePicture />
    </React.Fragment>
  )
}
