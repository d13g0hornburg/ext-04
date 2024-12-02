import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './apoio.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.jpg';
import logo2 from '../../assets/images/logo2.jpg';
import logo3 from '../../assets/images/logo3.jpg';
import qrcode1 from '../../assets/images/qrcode1.PNG';
import qrcode2 from '../../assets/images/qrcode2.PNG';
import qrcode3 from '../../assets/images/qrcode3.PNG';

const Apoio = () => {
  const navigate = useNavigate();
  const institutions = [
    {
      name: 'Instituição 1',
      logo: logo1,
      qrcode: qrcode1,
      description: 'Descrição da Instituição 1.',
      contact: 'contato@instituicao1.com',
    },
    {
      name: 'Instituição 2',
      logo: logo2,
      description: 'Descrição da Instituição 2.',
      qrcode: qrcode2,
      contact: 'contato@instituicao2.com',
    },
    {
      name: 'Instituição 3',
      logo: logo3,
      qrcode: qrcode3,
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
        <div className="button-container">
          <button onClick={() => navigate('/home')} title="Voltar">
            <FaArrowLeft />
          </button>
        </div>
        <div className="institutions">
          {institutions.map((institution, index) => (
            <div key={index} className="institution">
              <img src={institution.logo} alt={`Logo da ${institution.name}`} className="institution-logo" />
              <h2>{institution.name}</h2>
              <p>{institution.description}</p>
              <p><b>Contato:</b> {institution.contact}</p>
              <img src={institution.qrcode} alt={`Logo da ${institution.name}`} className="qrcode-code" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apoio;