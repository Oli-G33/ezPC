import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import LoginImg from '../assets/LoginImg.jpg';
import { Helmet } from 'react-helmet-async';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';

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
      <Helmet>
        <title>Login</title>
      </Helmet>

      <MDBContainer className="my-5 w-75">
        <MDBCard>
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                src={LoginImg}
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <MDBCardBody>
                <form onSubmit={handleLogIn}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="form1"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    autoComplete="on"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form2"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete="on"
                  />

                  <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                  <span>
                    <small>
                      Not registered? <a href="/register">Sign up!</a>
                    </small>
                  </span>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default LogInPage;
