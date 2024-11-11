import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const data = await response.json();
    
    // Adiciona a resposta do bot (com link clicável)
    setMessage((prev) => [...prev, { message: data.message, user: 'bot' }]);
    setInput("");
  };

  return (
    <>
      <Button variant="primary" onClick={toggleChat}>BotChat</Button>
      
      <Modal show={show} onHide={toggleChat}>
        <Modal.Header closeButton>
          <Modal.Title>ChatBot</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message.map((msg, index) => (
            <div key={index}>

              <p dangerouslySetInnerHTML={{ __html: msg.message }} />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Form.Group>
            <InputGroup>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button onClick={handleMessage}>Enviar</Button>
            </InputGroup>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChatBot;
