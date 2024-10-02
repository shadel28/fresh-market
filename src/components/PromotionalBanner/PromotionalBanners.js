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
            src="/img/banner1.png"
           
          />
          <img
            className="d-block w-45 banner-img"
            src="/img/banner2.png"
            
          />
        </div>
      
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img
            className="d-block w-45 me-2 banner-img"
            src="/img/banner3.png"
           
          />
          <img
            className="d-block w-45 banner-img"
            src="/img/banner1.png"
            
          />
        </div>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default PromotionalBanners;
