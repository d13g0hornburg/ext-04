import React, { useEffect } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import CarouselComponent from '../../Components/Carousel/CarouselComponent';
import ActionCards from '../../Components/ActionCards/ActionCards';

const Home = () => {
  useEffect(() => {
    document.title = 'Achados e perdidos';
  }, []);
  return (
    <div>
      <title>Achados e perdidos</title>
      <Header />
      <CarouselComponent />
      <ActionCards />
      <Footer />
    </div>
  );
};

export default Home;