// Esta es la pagina de inicio
import Header from "../../components/layaouts/Header/Header";
import React from 'react'
import Menu from "../../components/layaouts/Header/Header"
import Footer from "../../components/layaouts/Footer/Footer"
import Product_Card from "../../components/Home/ProductCard"
import Category_Card from "../../components/Home/CategoryCard"
import { Button } from "react-bootstrap"

import './Customer.css'
function Home() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <section className="banner">
          <div className="banner-content">
              <img src="./images/offer1.png" className="img1" alt="" />
              <img src="./images/offer2.png" className="img2"alt="" />
          </div>
        </section>
        <section className="sect Categories my-5">
          <h3>Buscar por Categoria </h3>
          <div className="card-container my-4">
              <Category_Card img_src={"images/categories/almacen.svg"} title="Almacen"/>
              <Category_Card img_src={"images/categories/bebidas.svg"} title="Bebidas"/>
              <Category_Card img_src={"images/categories/lacteos.svg"} title="Lacteos"/>
              <Category_Card img_src={"images/categories/carnesypescados.svg"} title="Carnes & Pescados"/>
              <Category_Card img_src={"images/categories/frutas-verduras.svg"} title="Frutas & Verduras"/>
              <Category_Card img_src={"images/categories/panaderia.svg"} title="Panaderia"/>
              <Category_Card img_src={"images/categories/congelados.svg"} title="Congelados"/>
              <Category_Card img_src={"images/categories/limpieza.svg"} title="Limpieza"/>
          </div>
        </section>
        <section className="sect productsPRVW">
          <div className="prod-head">
            <h3>Productos en Tendencia</h3>
            <Button className="cat-btn">
                Ver todos
            </Button>
          </div>
          <div className="categories-filter-container my-4">
            <div className="categories-filter">
              <Button className="cat-btn">Almacen</Button>
              <Button className="cat-btn">Bebidas</Button>
              <Button className="cat-btn">Lacteos</Button>
              <Button className="cat-btn">Carnes & pescados</Button>
              <Button className="cat-btn">Frutas & verduras</Button>
              <Button className="cat-btn">Panaderia</Button>
              <Button className="cat-btn">Congelados</Button>
              <Button className="cat-btn">Limpieza</Button>
            </div>
          </div>
          <div className="product-cards row my-5 py-4">
              <Product_Card imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <Product_Card imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <Product_Card imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <Product_Card imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <Product_Card imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
          </div>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Home

