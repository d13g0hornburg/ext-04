// PrintProtocol.js
import React from 'react';
import { format } from 'date-fns';
import './printProtocol.css';

const PrintProtocol = ({ objeto }) => {
  return (
    <div className="print-container">
      <div className="print-header">
        <h1>Protocolo do Objeto</h1>
      </div>
      <div className="print-main">
        <div className="print-details">
          <div className="print-item">
            <div className="print-label">Código:</div>
            <div className="print-value">{objeto.id}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Ambiente:</div>
            <div className="print-value">{objeto.ambiente}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Encontrado <br /> por:</div>
            <div className="print-value">{objeto.encontrado}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Data:</div>
            <div className="print-value">{format(new Date(objeto.data), 'yyyy-MM-dd')}</div>
          </div>
        </div>
        <div className="print-details2">
          <div className="print-item">
            <div className="print-label">Descrição:</div>
            <div className="print-value">{objeto.descricao}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Professor:</div>
            <div className="print-value">{objeto.professor}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Curso:</div>
            <div className="print-value">{objeto.curso}</div>
          </div>
          <div className="print-item">
            <div className="print-label">Hora:</div>
            <div className="acao print-value">{objeto.hora.slice(0, 5)}</div>
          </div>
        </div>
      </div>
      <div className="print-image">
        <div className="print-label">Imagem:</div>
        <div className="print-value"><img src={`/uploads/${objeto.imagem_objeto}`} alt="Imagem do Objeto" style={{ maxWidth: '100%', height: 'auto' }} /></div>
      </div>
      <div className="print-signature">
        <div className="signature-field">
          <div className="signature-label">Data da Retirada:___/___/_____</div>
          <div className="signature-line"></div>
        </div>
        <div className="signature-field">
          <div className="signature-label">Assinatura do Recebedor: _____________</div>
          <div className="signature-line"></div>
        </div>
      </div>
      <div className="print-actions">
        <button onClick={() => window.print()}>Imprimir</button>
        <button onClick={() => window.close()}>Fechar</button>
        <button onClick={() => window.location.href='/html/home.html'}>Home</button>
      </div>
    </div>
  );
};

export default PrintProtocol;