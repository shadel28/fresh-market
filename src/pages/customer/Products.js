import React from "react";
import PromotionalBanners from "../../components/PromotionalBanner/PromotionalBanners";
import Filters from '../../components/Filters/Filters';
import ProductList from "../../components/ProductsList/ProductList"; 
import Footer from "../../components/layaouts/Footer/Footer/Footer";
import Header from '../../components/layaouts/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./customer.css"

function Products(){

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

export default Products;