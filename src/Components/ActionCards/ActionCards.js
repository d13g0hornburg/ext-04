import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './ActionCards.css';

const ActionCards = () => {
  return (
    <div className="action-cards-container text-center mt-5">
      <div className="action-cards-row">
        <div className="mb-4">
          <Card className="action-card">
            <Card.Body>
              <FaPlusCircle size={50} />
            </Card.Body>
          </Card>
          <Button variant="primary" className="mt-3">Adicionar Item</Button>
        </div>
        <div className="mb-4">
          <Card className="action-card">
            <Card.Body>
              <FaListAlt size={50} />
            </Card.Body>
          </Card>
          <Button variant="primary" className="mt-3">Listar Todos</Button>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;