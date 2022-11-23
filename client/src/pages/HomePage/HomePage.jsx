import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { CarrouselBtn } from '../../components/Navbar.style';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CarrouselImg1 from '../../assets/CarrouselImg1.jpg';
import CarrouselImg2 from '../../assets/CarrouselImg2.jpg';
import CarrouselImg3 from '../../assets/CarrouselImg3.jpg';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ezPC</title>
      </Helmet>
      <div className="carousel">
        <MDBCarousel showIndicators showControls fade h-75>
          <MDBCarouselItem
            className="w-100 d-block img-fluid"
            itemId={1}
            src={CarrouselImg1}
            alt="..."
            style={{ objectFit: 'contain' }}
          >
            <div className="carousel-text">
              <h5>Alienware Aurora MX1</h5>
              <p>Experience the freedom of immersive performance.</p>
            </div>
            <CarrouselBtn>
              <Link
                to="/products"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                View Products
              </Link>
            </CarrouselBtn>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={CarrouselImg2}
            alt="..."
            dark
          >
            <div className="carousel-text">
              <h5 style={{ color: 'black' }}>MacBook Air</h5>
              <p style={{ color: 'black' }}>Don’t take it lightly.</p>
            </div>
            <CarrouselBtn>
              <Link
                to="/products"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                View Products
              </Link>
            </CarrouselBtn>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={CarrouselImg3}
            alt="..."
          >
            <div className="carousel-text">
              <h5>Surface Pro 9</h5>
              <p>All in one ultra-portable device</p>
            </div>
            <CarrouselBtn>
              <Link
                to="/products"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                View Products
              </Link>
            </CarrouselBtn>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

      <section className="intro-section">
        <div>
          <h2>About us:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            ratione nisi. Maiores fugit at assumenda voluptatibus voluptates!
            Voluptatum, facilis. Ipsa officiis nam eos, facilis corporis totam
            fuga optio minima sed!
          </p>
        </div>
        <div>
          <h2>Something will go here</h2>
        </div>
      </section>
    </>
  );
};

export default HomePage;
