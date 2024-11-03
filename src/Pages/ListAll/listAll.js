import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './listAll.css';

const ListAll = () => {
  const [items] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Header />
      <main id="mainListar">
        <div className="table-container">
          <div id="tituloRelatorio">
            <h1 id="relatorio">Relatório de itens</h1>
            <button className="no-print" onClick={handlePrint}>Imprimir</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Ambiente</th>
                <th>Professor</th>
                <th>Curso</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Encontrado por</th>
                <th>Imagem</th>
                <th id="no-printAcao">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.descricao}</td>
                  <td>{item.ambiente}</td>
                  <td>{item.professor}</td>
                  <td>{item.curso}</td>
                  <td>{new Date(item.data).toLocaleDateString()}</td>
                  <td>{item.hora.slice(0, 5)}</td>
                  <td>{item.encontrado}</td>
                  <td><img src={`/uploads/${item.imagem_objeto}`} alt={item.descricao} style={{ width: '48px', height: '48px' }} /></td>
                  <td id="btnAcao" className="no-print">
                    <button className="acao no-print" onClick={() => window.location.href=`/editar/${item.id}`}>Editar</button>
                    <button className="acao no-print" onClick={() => window.location.href=`/excluir/${item.id}`}>Excluir</button>
                    <button className="no-print" onClick={() => window.open(`/imprimir/${item.id}`)}>Imprimir Protocolo</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="acao no-print" onClick={() => window.location='/home'}>Voltar</button>
      </main>
      <Footer />
    </div>
  );
};

export default ListAll;