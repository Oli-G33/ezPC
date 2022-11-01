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
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-start  p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with me on social media:</span>
        </div>
        <div>
          <a
            href="https://linkedin.com/in/oliver-garcia3/"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/Oli-G33"
            className="me-4 text-reset"
            target="_blank"
          >
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <a href="mailto:ngarcia333@gmail.com">ngarcia333@gmail.com</a>
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +49
                179 5385452
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
