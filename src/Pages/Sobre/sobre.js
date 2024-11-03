import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './sobre.css';

const Sobre = () => {
  return (
    <div>
      <Header />
      <main id="mainSobre">
        <h1>Achados e Perdidos</h1>
        <p>Gestão eficiente de objetos perdidos em instituições de ensino.</p>
        <h2>Autores</h2>
        <p>Davi Emanuel Araujo Padilha, Diego Ricardo Hornburg, Enthoni Nagel, Mateus Padilha Lourenço.</p>
        <h2>Instituição</h2>
        <p>Faculdade de tecnologia Senac de Jaraguá do Sul (SENAC)</p>
        <p>89254-430 – Jaraguá do Sul – SC – Brasil</p>
        <h2>Contato</h2>
        <p>davi.padilha@alunos.sc.senac.br, diego.hornburg@alunos.sc.senac.br, enthoni.nagel@alunos.sc.senac.br, mateus.lourenco@alunos.sc.senac.br</p>
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;