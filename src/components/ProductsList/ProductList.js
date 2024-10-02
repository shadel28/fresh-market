import React from 'react';
import { Carousel } from 'react-bootstrap';


function ProductList(){
   
  return(



<Carousel indicators={false}>
   
      <Carousel.Item>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card">
              <img src="./img/hola.jpg" className="card-img-top" alt="Queso Místico" />
              <div className="card-body">
                <h5 className="card-title">Habichuelas</h5>
                <p className="card-text">$0.99</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/hola.jpg" className="card-img-top" alt="Queso Burrata" />
              <div className="card-body">
                <h5 className="card-title">Azucar</h5>
                <p className="card-text">$0.90</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/hola.jpg" className="card-img-top" alt="Rebanadas de Cheddar Clásico" />
              <div className="card-body">
                <h5 className="card-title">Leche</h5>
                <p className="card-text">$1.20</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/hola.jpg" className="card-img-top" alt="Queso Azul Gorgonzola Piccante" />
              <div className="card-body">
                <h5 className="card-title">Queso</h5>
                <p className="card-text">$1.50</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card">
              <img src="./img/tercera.jpg" className="card-img-top" alt="Queso Místico" />
              <div className="card-body">
                <h5 className="card-title">Habichuelas</h5>
                <p className="card-text">$0.99</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/tercera.jpg" className="card-img-top" alt="Queso Burrata" />
              <div className="card-body">
                <h5 className="card-title">Azucar</h5>
                <p className="card-text">$0.90</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/tercera.jpg" className="card-img-top" alt="Rebanadas de Cheddar Clásico" />
              <div className="card-body">
                <h5 className="card-title">Leche</h5>
                <p className="card-text">$1.20</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src="./img/tercera.jpg" className="card-img-top" alt="Queso Azul Gorgonzola Piccante" />
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

