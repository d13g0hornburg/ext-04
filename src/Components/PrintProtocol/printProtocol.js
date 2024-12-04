import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './printProtocol.css';
import { useNavigate } from 'react-router-dom';
import { FaPrint, FaArrowLeft } from 'react-icons/fa'; // Importar ícones

const PrintProtocol = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'items', itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <main id="mainListar">
        <div className="table-container">
          <div id="tituloRelatorio">
            <h1 id="relatorio">Item</h1>
              <div className="button-container">
                <button className="no-print" onClick={handlePrint} title="Imprimir">
                  <FaPrint />
                </button>
                <button className="no-print" onClick={() => navigate('/home')} title="Voltar">
                  <FaArrowLeft />
                </button>
              </div>
          </div>
          <div className="item-details">
            <img src={`http://localhost:5000${item.imagem_objeto}`} alt={item.descricao} className="item-image" />
            <div className="details-container">
              <div>
                <p><strong>Código:</strong> {item.numericId.toString().padStart(5, '0')}</p>
                <p><strong>Ambiente:</strong> {item.ambiente}</p>
                <p><strong>Professor:</strong> {item.professor}</p>
              </div>
              <div>
                <p><strong>Curso:</strong> {item.curso}</p>
                <p><strong>Data:</strong> {new Date(item.data).toLocaleDateString()}</p>
                <p><strong>Hora:</strong> {item.hora.slice(0, 5)}</p>
                <p><strong>Encontrado por:</strong> {item.encontrado}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrintProtocol;