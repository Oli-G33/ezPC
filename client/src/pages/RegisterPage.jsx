import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AuthenticationContext);

  const handleRegistration = event => {
    event.preventDefault();
    registerUser({ firstName, lastName, email, password }).then(data => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div className="authForm">
      <Form onSubmit={handleRegistration}>
        <Row className="g-2">
          <Col>
            <Form.Label htmlFor="input-FirstName"></Form.Label>
            <Form.Control
              id="input-FirstName"
              placeholder="First Name"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              autoComplete="off"
            />

            <Form.Label htmlFor="input-LastName"></Form.Label>
            <Form.Control
              id="input-LastName"
              placeholder="Last Name"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              autoComplete="off"
            />
          </Col>
          <Col>
            <Form.Label htmlFor="input-email"></Form.Label>
            <Form.Control
              id="input-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              autoComplete="off"
            />

            <Form.Label htmlFor="input-password"></Form.Label>
            <Form.Control
              id="input-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              autoComplete="off"
            />
          </Col>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default RegisterPage;
