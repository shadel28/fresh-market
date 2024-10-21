import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PromotionalBanner.css';


function PromotionalBanners() {
  return (
       <Carousel className="mt-4 carrusel-publicidad" indicators={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-45 me-2 banner-img"
              src="./images/offer1.png" alt='img'
            
            />
            <img
              className="d-block w-45 banner-img"
              src="/images/banner3.jpg"
              alt='img'
            />
          </div>
        
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img
              className="d-block w-45 me-2 banner-img"
              src="/images/banner1.jpg"
              alt='img'
            />
            <img
              className="d-block w-45 banner-img"
              src="/images/banner2.jpg"
              alt='img'
            />
          </div>
        
        </Carousel.Item>
    </Carousel>
  );
}

export default PromotionalBanners;
