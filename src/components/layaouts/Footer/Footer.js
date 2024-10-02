import React from 'react'
import logo from '../../../assets/logo.png';

export default function Footer() {
  return (
    <>
      <footer className="piePagina row pt-5">
          <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img src={logo} alt="" style={{ width: '150px' }}/>
          </a>
          </div>

          <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          </ul>
          </div>

          <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          </ul>
          </div>

          <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          </ul>
          </div>
          <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          </ul>
          </div>
          <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
          </ul>
          </div>
          
          <div class="container">
              <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2024 FreshMarket, Inc</span>

                  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                      <li class="ms-3"><a class="text-body-secondary" href="#"><img className="bi" width="24" height="24" src="facebook.svg"/></a></li>
                      <li class="ms-3"><a class="text-body-secondary" href="#"><img className="bi" width="24" height="24" src="instagram.svg"/></a></li>
                      <li class="ms-3"><a class="text-body-secondary" href="#"><img className="bi" width="24" height="24" src="vite.svg"/></a></li>
                  </ul>
              </div>
          </div>
      </footer>
    </>
  )
}