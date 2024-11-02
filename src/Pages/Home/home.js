import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Welcome to the Home Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;