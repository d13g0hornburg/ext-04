import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import { Helmet } from 'react-helmet';
import './addItem.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    descricao: '',
    data: '',
    hora: '',
    ambiente: '',
    encontrado: '',
    imagem_objeto: null,
    professor: '',
    curso: ''
  });

  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        const docRef = doc(db, 'items', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      };

      fetchItem();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagem_objeto') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = formData.imagem_objeto;
      if (formData.imagem_objeto instanceof File) {
        const uploadData = new FormData();
        uploadData.append('imagem_objeto', formData.imagem_objeto);
        const response = await axios.post('http://localhost:5000/upload', uploadData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        imageUrl = response.data.filePath;
      }

      const itemData = { ...formData, imagem_objeto: imageUrl };

      if (id) {
        const docRef = doc(db, 'items', id);
        await updateDoc(docRef, itemData);
        console.log('Document updated with ID: ', id);
        alert('Item atualizado com sucesso!');
      } else {
        const docRef = await addDoc(collection(db, 'items'), itemData);
        console.log('Document written with ID: ', docRef.id);
        alert('Item adicionado com sucesso!');
      }
      navigate('/listAll');
    } catch (e) {
      console.error('Error adding/updating document: ', e);
      alert('Erro ao adicionar/atualizar item.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>{id ? 'Editar Item' : 'Cadastrar item'}</title>
      </Helmet>
      <Header />
      <main>
        <h2>{id ? 'Editar Item' : 'Adicionar Item'}</h2>
        <form id="addItem-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="descricao">Objeto encontrado</label>
            <input
              className="cadastroInput"
              type="text"
              name="descricao"
              required
              placeholder="Descrição"
              value={formData.descricao}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="dataEncontrado">Data Encontrado</label>
            <input
              className="cadastroInput"
              type="date"
              name="data"
              required
              value={formData.data}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="horaEncontrado">Hora Encontrado</label>
            <input
              className="cadastroInput"
              type="time"
              name="hora"
              required
              value={formData.hora}
              onChange={handleChange}
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
              value={formData.ambiente}
              onChange={handleChange}
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
              value={formData.encontrado}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="imagem_objeto">Imagem</label>
            <input
              type="file"
              id="imagem_objeto"
              name="imagem_objeto"
              accept="image/*"
              onChange={handleChange}
            /><br />
            {formData.imagem_objeto && typeof formData.imagem_objeto === 'string' && (
              <img src={`http://localhost:5000${formData.imagem_objeto}`} alt="Imagem do objeto" className="item-image-preview" />
            )}
          </div>
          <div className="input-container">
            <label htmlFor="nomeProfessor">Professor</label>
            <input
              className="cadastroInput"
              type="text"
              name="professor"
              placeholder="Nome do Professor"
              value={formData.professor}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="curso">Curso</label>
            <input
              className="cadastroInput"
              type="text"
              name="curso"
              placeholder="Curso"
              value={formData.curso}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{id ? 'Atualizar' : 'Enviar'}</button>
          <button type="button" className="button" onClick={() => navigate('/listAll')}>Voltar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddItem;