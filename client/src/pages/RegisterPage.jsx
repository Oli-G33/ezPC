import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div>
      <Form onSubmit={handleRegistration}>
        <Form.Label htmlFor="input-FirstName">First Name</Form.Label>
        <Form.Control
          id="input-FirstName"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          autoComplete="off"
        />
        <Form.Label htmlFor="input-LastName">Last Name</Form.Label>
        <Form.Control
          id="input-LastName"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          autoComplete="off"
        />

        <Form.Label htmlFor="input-email">Email</Form.Label>
        <Form.Control
          id="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          autoComplete="off"
        />

        <Form.Label htmlFor="input-password">Password</Form.Label>
        <Form.Control
          id="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          autoComplete="off"
        />

        <Button variant="primary" type="submit">
          Register New Account
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
