import React from "react";
import PromotionalBanners from "../../components/PromotionalBanner/PromotionalBanners";
import Filters from "../../components/Filters/Filters";
import ProductList from "../../components/ProductsList/ProductList";
import Header from "../../components/layaouts/Header/Header";
import "./customer.css";
import Footer from "../../components/layaouts/Footer/Footer";

function Products() {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col-md-3">
            <Filters />
          </div>
          <div
            className="col-md-9 d-flex flex-column justify-content-center align-items-center"
            style={{ textAlign: "start", gap: "4rem" }}
          >
            <PromotionalBanners />
            <div style={{ width: "100%" }}>
              <label
                style={{ fontSize: "25px", color: "black", margin: "2rem 0" }}
              >
                Bebidas
              </label>
              <ProductList />
              <label
                style={{ fontSize: "25px", color: "black", margin: "2rem 0" }}
              >
                Lácteos
              </label>
              <ProductList />
              <label
                style={{ fontSize: "25px", color: "black", margin: "2rem 0" }}
              >
                Carnes & pescados
              </label>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
