import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { CarrouselBtn } from '../../components/Navbar.style';
import { Link } from 'react-router-dom';
import CarrouselImg1 from '../../assets/CarrouselImg1.jpg';
import CarrouselImg2 from '../../assets/CarrouselImg2.jpg';
import CarrouselImg3 from '../../assets/CarrouselImg3.jpg';

const HomePage = () => {
  return (
    <div>
      <MDBCarousel showIndicators showControls fade h-75>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src={CarrouselImg1}
          alt="..."
          style={{ objectFit: 'contain' }}
        >
          <h5>Alienware Aurora MX1</h5>
          <p>Experience the freedom of immersive performance.</p>
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
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
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
      <section>
        <h2>About us:</h2>
        <p></p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        ratione nisi. Maiores fugit at assumenda voluptatibus voluptates!
        Voluptatum, facilis. Ipsa officiis nam eos, facilis corporis totam fuga
        optio minima sed!
      </section>
      ;
    </div>
  );
};

export default HomePage;
