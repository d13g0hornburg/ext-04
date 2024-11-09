import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import './addItem.css';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

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
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddItem;
