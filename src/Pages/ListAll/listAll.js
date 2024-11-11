import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './listAll.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ListAll = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsList);
    };

    fetchItems();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDelete = async (itemId) => {
    await deleteDoc(doc(db, 'items', itemId));
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <Helmet>
        <title>{'Listar'}</title>
      </Helmet>
      <Header />
      <main id="mainListar">
        <div className="table-container">
          <div id="tituloRelatorio">
            <h1 id="relatorio">Relatório de itens</h1>
            <button className="no-print" onClick={handlePrint}>Imprimir</button>
          </div>
          {selectedItem ? (
            <div className="item-details">
              <img src={`http://localhost:5000${selectedItem.imagem_objeto}`} alt={selectedItem.descricao} className="item-image" />
              <h3>{selectedItem.descricao}</h3>
              <p><strong>Código:</strong> {selectedItem.numericId.toString().padStart(5, '0')}</p>
              <p><strong>Ambiente:</strong> {selectedItem.ambiente}</p>
              <p><strong>Professor:</strong> {selectedItem.professor}</p>
              <p><strong>Curso:</strong> {selectedItem.curso}</p>
              <p><strong>Data:</strong> {new Date(selectedItem.data).toLocaleDateString()}</p>
              <p><strong>Hora:</strong> {selectedItem.hora.slice(0, 5)}</p>
              <p><strong>Encontrado por:</strong> {selectedItem.encontrado}</p>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Descrição</th>
                  <th>Imagem</th>
                  <th id="no-printAcao">Ações</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} onClick={() => handleItemClick(item)}>
                    <td>{item.numericId.toString().padStart(5, '0')}</td>
                    <td>{item.descricao}</td>
                    <td><img src={`http://localhost:5000${item.imagem_objeto}`} alt={item.descricao} className="item-image" /></td>
                    <td id="btnAcao" className="no-print">
                      <button className="acao no-print" onClick={(e) => { e.stopPropagation(); navigate(`/addItem/${item.id}`); }}>Editar</button>
                      <button className="acao no-print" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button className="acao no-print" onClick={() => navigate('/home')}>Voltar</button>
      </main>
      <Footer />
    </div>
  );
};

export default ListAll;