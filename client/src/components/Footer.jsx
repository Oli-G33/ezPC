import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center  p-4 border-bottom">
        <div className="me-4 d-none d-lg-block">
          <span>Connect with me on social media:</span>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/oliver-garcia3/"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/Oli-G33"
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon fas icon="user-alt" className="me-3" />
                Oliver Garcia
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <a href="mailto:ngarcia333@gmail.com">ngarcia333@gmail.com</a>
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <a href="tel:+491795385452">+49 179 5385452</a>
              </p>
              <p>
                <MDBIcon fas icon="globe" className="me-3" />
                Bamberg, Germany
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon fab icon="react" className="me-2" />
                About me
              </h6>
              <p>
                I am a junior Full-Stack Developer. I enjoy creating web
                applications using NodeJS, ReactJS, and styling frameworks such
                as Material Design.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © {year} <i>Oliver Garcia</i>
      </div>
    </MDBFooter>
  );
}
