import React, { useEffect } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { Helmet } from 'react-helmet';

const Apoio = () => {
  useEffect(() => {
    document.title = 'Apoio'; 
  }, []); 

  return (
    <div>
       <Helmet>
      <title>Apoio</title>
    </Helmet>
      <Header />
      <div className="container mt-5">
      </div>
      <Footer />
    </div>
  );
};

export default Apoio;
