import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(AuthenticationContext);

  const handleLogIn = event => {
    event.preventDefault();
    logInUser({ email, password }).then(data => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div className="authForm">
      <Form onSubmit={handleLogIn} style={{ width: 600 }}>
        <Row className="g-2">
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="input-email"></Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                autoComplete="on"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="input-password"></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                autoComplete="on"
              />
            </Form.Group>
          </Col>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default LogInPage;
