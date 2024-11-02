import React from 'react';
import { FaPlusCircle, FaListAlt } from 'react-icons/fa';
import './ActionCards.css';

const ActionCards = () => {
  return (
    <div className="action-cards-container text-center mt-5">
      <div className="action-cards-row">
        <div className="mb-4">
          <div className="action-card">
            <button className="icon-button" onClick={() => window.location.href='/addItem'}>
              <FaPlusCircle size={50} />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="action-card">
            <button className="icon-button" onClick={() => window.location.href='/listar-todos'}>
              <FaListAlt size={50} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;