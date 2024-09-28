import React from "react";
import PromotionalBanners from "./components/PromotionalBanners";
// import PromotionalBanners from './PromotionalBanners';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function Catalogo(){

    return(   
     
        <><Header />
        <div className="container mt-4">

            <div className="row">
                <div className="col-md-3">
                    <Filters />
                </div>
                <div className="col-md-9">
                    <PromotionalBanners />
                    <br />
                    <label style={{ fontSize: '25px', marginRight: '900px', color: 'black' }}>Quezo</label>
                    <ProductList />
                    <br />
                    <br />
                    <label style={{ fontSize: '25px', marginRight: '900px', color: 'black' }}>Leche</label>
                    <ProductList />
                    <br />
                    <br />
                    <label style={{ fontSize: '25px', marginRight: '900px', color: 'black' }}>Huevos</label>
                    <ProductList />
                </div>
            </div>
            
        </div>
        <Footer />
        </>

    );
}

export default Catalogo;