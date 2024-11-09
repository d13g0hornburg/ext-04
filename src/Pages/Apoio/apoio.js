import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './apoio.css';
import logo1 from '../../assets/images/logo1.jpg';
import logo2 from '../../assets/images/logo2.jpg';
import logo3 from '../../assets/images/logo3.jpg';


const Apoio = () => {
  const institutions = [
    {
      name: 'Instituição 1',
      logo: logo1,
      description: 'Descrição da Instituição 1.',
      contact: 'contato@instituicao1.com',
    },
    {
      name: 'Instituição 2',
      logo: logo2,
      description: 'Descrição da Instituição 2.',
      contact: 'contato@instituicao2.com',
    },
    {
      name: 'Instituição 3',
      logo: logo3,
      description: 'Descrição da Instituição 3.',
      contact: 'contato@instituicao3.com',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Apoio</title>
      </Helmet>
      <Header />
      <main id="mainApoio">
        <h1>Instituições que Apoiamos</h1>
        <div className="institutions">
          {institutions.map((institution, index) => (
            <div key={index} className="institution">
              <img src={institution.logo} alt={`Logo da ${institution.name}`} className="institution-logo" />
              <h2>{institution.name}</h2>
              <p>{institution.description}</p>
              <p><b>Contato:</b> {institution.contact}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apoio;