import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './sobre.css';
import { Helmet } from 'react-helmet';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sobre = () => {
  const [showLegislation, setShowLegislation] = useState(false);
  const navigate = useNavigate();

  const toggleLegislation = () => {
    setShowLegislation(!showLegislation);
  };

  return (
    <div>
    <Helmet>
      <title>Sobre</title>
    </Helmet>
      <Header />
      <main id="mainSobre">
      <div className="button-container">
      <button onClick={() => navigate('/home')} title="Voltar">
        <FaArrowLeft />
        </button>
      </div>
        <h1>Achados e Perdidos</h1>

        <p>Gestão eficiente de objetos perdidos em instituições de ensino.</p>
        <h2>Autores</h2>
        <p>Diego Ricardo Hornburg, Enthoni Nagel, Mateus Padilha Lourenço.</p>
        <h2>Instituição</h2>
        <p>Faculdade de tecnologia Senac de Jaraguá do Sul (SENAC)</p>
        <p>89254-430 – Jaraguá do Sul – SC – Brasil</p>
        <h2>Contato</h2>
        <p>diego.hornburg@alunos.sc.senac.br, enthoni.nagel@alunos.sc.senac.br, mateus.lourenco@alunos.sc.senac.br</p>
        <h2 onClick={toggleLegislation} className="expandable">Legislação para itens perdidos em instituições de ensino</h2>
        {showLegislation && (
          <div className="legislation-content">
            <p>A legislação brasileira que trata da gestão de bens achados, incluindo a doação de pertences não reclamados, é abordada principalmente no <b>Código Civil</b>. A destinação específica, como a doação de itens não reclamados, pode não ser bem detalhada. Em tais casos, a instituição pode seguir princípios gerais de direito e políticas internas, desde que não contrariem a legislação existente.</p>
            <p><b>No Código Civil Brasileiro</b>, os artigos que tratam de objetos achados estão localizados principalmente na <b>Seção III, Capítulo II, do Livro III - "Dos Bens" [SENADO, 2008]</b>. Para uma instituição de ensino, é importante seguir esses princípios legais ao lidar com objetos perdidos.</p>
            <h3><b>Procedimentos para Gestão de Itens Perdidos</b></h3>
            <ul>
              <li><b>Registro e Armazenamento</b>: Todos os itens encontrados devem ser registrados detalhadamente e armazenados de maneira segura.</li>
              <li><b>Notificação e Divulgação:</b> Informar a comunidade acadêmica sobre os itens encontrados.</li>
              <li><b>Entrega às Autoridades</b>: Itens não reclamados devem ser entregues à autoridade competente dentro da instituição.</li>
              <li><b>Procedimentos Pós-Prazo</b>: Após o período de 90 dias, itens não reclamados podem ser doados para projetos e instituições de caridade.</li>
              <li><b>Destinação Alternativa</b>: Se não for possível realizar a devolução, ou se os itens forem de baixo valor, a instituição pode estabelecer uma política interna para doação dos itens não reclamados, sempre em conformidade com regulamento vigente.</li>
            </ul>
            <h3><b>Regulamentações Complementares</b></h3>
            <p>Para doações de bens em geral, incluindo itens não reclamados, podem ser consultadas as seguintes leis: <b>[Vade Mecum Brasil, 2019]</b></p>
            <ul>
              <li><b>Código Civil Brasileiro - Parte Geral</b>:</li>
              <ul>
                <li><b>Artigos 538 a 564</b>: Tratam de doações e podem fornecer um entendimento geral sobre como doações devem ser feitas.</li>
                <li><b>Artigos 1233 a 1237</b>: Essa seção do código civil regula o procedimento a ser seguido quando alguém encontra uma coisa alheia perdida.</li>
              </ul>
              <li><b>Leis Estaduais e Municipais</b>:</li>
              <ul>
                <li>Leis específicas de cada estado ou município podem tratar da destinação de bens públicos ou de doações de itens encontrados em instituições públicas ou privadas.</li>
              </ul>
              <li><b>Regulamentos Internos</b>:</li>
              <ul>
                <li>Instituições criam regulamentos internos para a gestão de itens perdidos, procedimentos específicos para doação após o prazo legal de retenção.</li>
              </ul>
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;