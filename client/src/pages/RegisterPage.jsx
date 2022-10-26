import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';

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
      <form onSubmit={handleRegistration}>
        <label htmlFor="input-FirstName">First Name</label>
        <input
          id="input-FirstName"
          placeholder="First Name"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          autoComplete="off"
        />
        <label htmlFor="input-LastName">Last Name</label>
        <input
          id="input-LastName"
          placeholder="Last Name"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          autoComplete="off"
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          autoComplete="off"
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          autoComplete="off"
        />

        <button>Register New Account</button>
      </form>
    </div>
  );
};

export default RegisterPage;
