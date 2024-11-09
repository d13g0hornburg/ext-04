import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './erro.css';

const Erro = () => {
  return (
    <div>
      <Header />
      <main id="mainError">
        <h1>Erro 404</h1>
        <p>A página que você está procurando não foi encontrada.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Erro;