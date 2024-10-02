import React from 'react';
import './Filters.css'; 

const Filters = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-left">Filtros</h2>
      <div className="list-group">

       
        <div className="list-group-item text-left d-flex align-items-center">
          <div className="toggle-wrapper small-toggle">
            <input
              className="toggle-checkbox"
              type="checkbox"
              id="oferta"
              name="oferta"
              defaultChecked={true}
            />
            <div className="toggle-container">
              <div className="toggle-button">
                <div className="toggle-button-circles-container">
                  
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="deals" style={{ marginLeft: '10px' }}>Ofertas</label>
        </div>

        
        <div className="list-group-item text-left d-flex align-items-center">
          <div className="toggle-wrapper small-toggle">
            <input
              className="toggle-checkbox"
              type="checkbox"
              id="nuevos"
              name="nuevos"
            />
            <div className="toggle-container">
              <div className="toggle-button">
                <div className="toggle-button-circles-container">
                  
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="newArrivals" style={{ marginLeft: '10px' }}>Nuevos Llegados</label>
        </div>

      
        <div className="list-group-item text-left d-flex align-items-center">
          <div className="toggle-wrapper small-toggle">
            <input
              className="toggle-checkbox"
              type="checkbox"
              id="cerca"
              name="cerca"
              defaultChecked={true}
            />
            <div className="toggle-container">
              <div className="toggle-button">
                <div className="toggle-button-circles-container">
                 
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="nearMe" style={{ marginLeft: '10px' }}>Cerca de mí</label>
        </div>

        
        <div className="list-group-item text-left">
          <h5 style={{ marginLeft: '-200px' }}>Precio</h5>
          <br />
          <div className="d-flex align-items-center">
            <div className="toggle-wrapper small-toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                id="precio"
                name="precio"
              />
              <div className="toggle-container">
                <div className="toggle-button">
                  <div className="toggle-button-circles-container">
                    
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="allPrice" style={{ marginLeft: '10px' }}>Todos</label>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="toggle-wrapper small-toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                id="precio"
                name="precio"
              />
              <div className="toggle-container">
                <div className="toggle-button">
                  <div className="toggle-button-circles-container">
                   
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="price4to25" style={{ marginLeft: '10px' }}>$4-$25</label>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="toggle-wrapper small-toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                id="precio"
                name="precio"
              />
              <div className="toggle-container">
                <div className="toggle-button">
                  <div className="toggle-button-circles-container">
                    
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="price5Above" style={{ marginLeft: '10px' }}>$5 & Más</label>
          </div>
        </div>

       
        <div className="list-group-item text-left">
          <h5 style={{ marginLeft: '-180px' }}>Hecho en</h5>
          <br />
          <div className="d-flex align-items-center">
            <div className="toggle-wrapper small-toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                id="origen"
                name="origen"
              />
              <div className="toggle-container">
                <div className="toggle-button">
                  <div className="toggle-button-circles-container">
                   
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="allOrigin" style={{ marginLeft: '10px' }}>Todos</label>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="toggle-wrapper small-toggle">
              <input
                className="toggle-checkbox"
                type="checkbox"
                id="rd"
                name="origin"
                defaultChecked={true}
              />
              <div className="toggle-container">
                <div className="toggle-button">
                  <div className="toggle-button-circles-container">
                    
                  </div>
                </div>
              </div>
            </div>
            <label htmlFor="rd" style={{ marginLeft: '10px' }}>República Dominicana</label>
          </div>
        </div>

       
        <div className="list-group-item text-left d-flex align-items-center">
          <div className="toggle-wrapper small-toggle">
            <input
              className="toggle-checkbox"
              type="checkbox"
              id="recuerdame"
              name="recuerdame"
            />
            <div className="toggle-container">
              <div className="toggle-button">
                <div className="toggle-button-circles-container">
                  
                </div>
              </div>
            </div>
          </div>
          <label htmlFor="recuerdame" style={{ marginLeft: '10px' }}>Recordarme</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;