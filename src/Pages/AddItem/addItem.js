import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './addItem.css';

const AddItem = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Adicionar Item</h2>
        <form id="objeto-form" action="/addItem" method="post" enctype="multipart/form-data">
          <div className="input-container">
            <label htmlFor="descricao">Objeto encontrado</label>
            <input
              className="cadastroInput"
              type="text"
              name="descricao"
              required
              placeholder="Descrição"
            />
          </div>
          <div className="input-container">
            <label htmlFor="dataEncontrado">Data Encontrado</label>
            <input
              className="cadastroInput"
              type="date"
              name="data"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="horaEncontrado">Hora Encontrado</label>
            <input
              className="cadastroInput"
              type="time"
              name="hora"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="localEncontrado">Ambiente</label>
            <input
              className="cadastroInput"
              type="text"
              name="ambiente"
              required
              placeholder="Local Encontrado"
            />
          </div>
          <div className="input-container">
            <label htmlFor="nomeEncontrador">Encontrado por:</label>
            <input
              className="cadastroInput"
              type="text"
              name="encontrado"
              required
              placeholder="Nome do Encontrador"
            />
          </div>
          <div className="input-container">
            <label htmlFor="imagem_objeto">Imagem</label>
            <input type="file" id="imagem_objeto" name="imagem_objeto" accept="image/*" /><br />
          </div>
          <div className="input-container">
            <label htmlFor="nomeProfessor">Professor</label>
            <input
              className="cadastroInput"
              type="text"
              name="professor"
              placeholder="Nome do Professor"
            />
          </div>
          <div className="input-container">
            <label htmlFor="curso">Curso</label>
            <input
              className="cadastroInput"
              type="text"
              name="curso"
              placeholder="Curso"
            />
          </div>
          <button type="submit">Enviar</button>
          <button type="button" className="button" onClick={() => window.location.href='/home'}>Voltar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddItem;