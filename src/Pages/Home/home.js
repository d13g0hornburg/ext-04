import React, { useEffect } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import CarouselComponent from '../../Components/Carousel/CarouselComponent';
import ActionCards from '../../Components/ActionCards/ActionCards';
import ChatBot from '../../Components/Chatbot/Chatbot';

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
      <ChatBot />
    </div>
  );
};

export default Home;