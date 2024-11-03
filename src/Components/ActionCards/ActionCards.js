import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './ActionCards.css';

const ActionCards = () => {
  const navigate = useNavigate();

  return (
    <div className="action-cards-container text-center mt-5">
      <div className="action-cards-row">
        <div className="mb-4">
          <div className="action-card">
            <button className="icon-button" onClick={() => navigate('/addItem')}>
              <FaPlusCircle size={50} />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="action-card">
            <button className="icon-button" onClick={() => navigate('/listar-todos')}>
              <FaListAlt size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;