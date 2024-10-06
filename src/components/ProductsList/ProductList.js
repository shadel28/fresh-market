import React from 'react';
import { Carousel } from 'react-bootstrap';


function ProductList(){
   
  return(
    <Carousel indicators={false}>
          <Carousel.Item>
            <div className="row w-100">
              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Místico" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Habichuelas</h5>
                    <p className="card-text">$0.99</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Burrata" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Azucar</h5>
                    <p className="card-text">$0.90</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Rebanadas de Cheddar Clásico" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Leche</h5>
                    <p className="card-text">$1.20</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Azul Gorgonzola Piccante" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Queso</h5>
                    <p className="card-text">$1.50</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="row w-100">
              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Místico" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Habichuelas</h5>
                    <p className="card-text">$0.99</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Burrata" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Azucar</h5>
                    <p className="card-text">$0.90</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Rebanadas de Cheddar Clásico" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Leche</h5>
                    <p className="card-text">$1.20</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="card w-75" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src="/images/apple.png" className="card-img-top" alt="Queso Azul Gorgonzola Piccante" style={{objectFit: 'cover', width: '110px'}}/>
                  <div className="card-body">
                    <h5 className="card-title">Queso</h5>
                    <p className="card-text">$1.50</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
    </Carousel>
  );
    
  
}
export default ProductList;

