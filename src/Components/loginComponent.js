import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConnection';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Login successful!');
      navigate('/home'); // Redirecionar para a página inicial
    } catch (error) {
      setError(mapFirebaseError(error.code));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Registration successful! You can now log in.');
    } catch (error) {
      setError(mapFirebaseError(error.code));
    }
  };

  const mapFirebaseError = (code) => {
    console.error(`Firebase error code: ${code}`);
    switch (code) {
      case 'auth/email-already-in-use':
        return 'E-mail já em uso!.';
      case 'auth/invalid-email':
        return 'E-mail inválido.';
      case 'auth/user-not-found':
        return 'Usuário não encontrado.';
      case 'auth/invalid-credential':
        return 'Credencial incorreta.';
      default:
        return 'Ocorreu um erro inesperado, tento novamente.';
    }
  };

  return (
    <div className="login-background">
       <Helmet>
      <title>A&P</title>
    </Helmet>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row>
          <Col>
            <div className="login-form-container">
              <h2 className="text-center">{isRegistering ? 'Register' : 'Login'}</h2>
              <Form onSubmit={isRegistering ? handleRegister : handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <br />
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <br />
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" className="w-100">
                  {isRegistering ? 'Registrar' : 'Login'}
                </Button>
              </Form>
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
              {success && <Alert variant="success" className="mt-3">{success}</Alert>}
              <Button
                variant="link"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError('');
                  setSuccess('');
                }}
                className="w-100 mt-3"
              >
                {isRegistering ? 'Já possui registro? Login' : "Não é registrado? Registrar-se"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComponent;