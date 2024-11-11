import React, { useState } from "react";
import { Button, Modal, Form, InputGroup, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chatbot.css';  // Importando o arquivo de estilo

function ChatBot() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");

  // Função para alterar a exibição do chat
  const toggleChat = () => setShow(!show);

  // Função para enviar a mensagem
  const handleMessage = async () => {
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário
    setMessage([...message, { message: input, user: 'user' }]);

    // Envia a mensagem para o backend (API)
    const response = await fetch('http://localhost:5000/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      
      const text = await response.text(); // Obtém a resposta como texto
      console.log("Resposta do servidor:", text); // Mostra o texto retornado
      
      // Tente fazer o parse se o conteúdo for um JSON
      try {
        const data = JSON.parse(text);
        setMessage((prev) => [...prev, { message: data.message, user: 'bot' }]);
      } catch (error) {
        console.error("Erro ao fazer o parse do JSON:", error);
      }
      
  };

  return (
    <>
      <Button variant="success" onClick={toggleChat} className="chat-button">
        <i className="fas fa-robot"></i> BotChat
      </Button>
      
      <Modal show={show} onHide={toggleChat} className="chat-modal">
        <Modal.Header closeButton className="chat-header">
          <Modal.Title>ChatBot</Modal.Title>
        </Modal.Header>
        <Modal.Body className="chat-body">
          {message.map((msg, index) => (
            <div key={index} className={`message ${msg.user}`}>
              <Card body>
                <p dangerouslySetInnerHTML={{ __html: msg.message }} />
              </Card>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer className="chat-footer">
          <Form.Group className="w-100">
            <InputGroup>
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-input"
                placeholder="Digite uma mensagem..."
              />
              <Button onClick={handleMessage} variant="primary" className="send-button">Enviar</Button>
            </InputGroup>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChatBot;
