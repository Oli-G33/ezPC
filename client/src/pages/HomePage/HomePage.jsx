import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { CarrouselBtn } from '../../components/Navbar.style';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CarrouselImg1 from '../../assets/CarrouselImg1.jpg';
import CarrouselImg2 from '../../assets/CarrouselImg2.jpg';
import CarrouselImg3 from '../../assets/CarrouselImg3.jpg';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import AMDProcessor from '../../assets/amd_banner.png';
import AppleRepair from '../../assets/apple-repair.png';

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
          <BsFillPeopleFill />
          <h2>About us</h2>
          <p>
            Since 2015, ezPC has been one of the leading manufacturers of
            computer systems worldwide. In the heart of Germany, more than 100
            employees produce over 8,000 perfectly set up PC and notebook
            systems per month. From day one until today, we have been working
            according to our mission statement: We love your PC!
          </p>
        </div>
        <div>
          <RiCustomerService2Fill />
          <h2>Top service</h2>
          <p>
            We will be happy to advise you by phone or email! Our multilingual
            sales team is composed of experts with years of experience and tons
            of satisfied customers! We are looking forward to chatting with you!
          </p>
        </div>
      </section>
      <section className="banner">
        <img src={AMDProcessor} alt="AMD Processors" />

        <img src={AppleRepair} alt="Apple repair" />
      </section>
    </>
  );
};

export default HomePage;
