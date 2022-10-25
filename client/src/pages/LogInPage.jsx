import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="input-email">
          <Form.Label htmlFor="input-email">Email</Form.Label>
          <Form.Control
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="input-password">
          <Form.Label htmlFor="input-password">Password</Form.Label>
          <Form.Control
            id="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log In to Existing Account
        </Button>
      </Form>
    </div>
  );
};

export default LogInPage;
