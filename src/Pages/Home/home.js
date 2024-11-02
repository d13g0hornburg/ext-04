import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import CarouselComponent from '../../Components/Carousel/CarouselComponent';
import ActionCards from '../../Components/ActionCards/ActionCards';

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      <ActionCards />
      <Footer />
    </div>
  );
};

export default Home;