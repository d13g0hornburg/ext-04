import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConnection';
import './CarouselComponent.css';

const CarouselComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    };

    fetchItems();
  }, []);

  return (
    <Carousel>
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={`http://localhost:5000${item.imagem_objeto}`}
            alt={item.descricao}
          />
          <Carousel.Caption>
            <h3>{item.descricao}</h3>
            <p>{item.ambiente}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;