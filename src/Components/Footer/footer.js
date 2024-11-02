import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-icons">
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaGithub size={30} />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Achados & Perdidos.</p>
          <p>Todos os direitos reservados.</p>
          <p>Contato: contato@achadoseperdidos.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;