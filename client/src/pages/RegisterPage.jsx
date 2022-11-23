import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Login</title>
      </Helmet>

      <MDBContainer className="p-4 background-radial-gradient overflow-hidden w-75">
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: 'hsl(218, 81%, 90%)' }}
            >
              The best PC's <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>
                and Laptops for your needs
              </span>
            </h1>

            <p className="px-3" style={{ color: 'hsl(218, 81%, 85%)' }}>
              At ezPC we're all about the best customer service and gaming
              experience. With over 30 years in the market, you can count on us
              to help you choose the best sytem for your needs!
            </p>
          </MDBCol>

          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>
            <form onSubmit={handleRegistration}>
              <MDBCard className="my-5 bg-glass">
                <MDBCardBody className="p-5">
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="First name"
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                        autoComplete="off"
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Last name"
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                        autoComplete="off"
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    autoComplete="off"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete="off"
                  />

                  <MDBBtn className="w-100 mb-4" size="md" type="submit">
                    sign up
                  </MDBBtn>
                  <span>
                    <small>
                      Already registered? <a href="/login">Sign in!</a>
                    </small>
                  </span>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default RegisterPage;
