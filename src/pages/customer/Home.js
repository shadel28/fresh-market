// Esta es la pagina de inicio
import Header from "../../components/layaouts/Header/Header";
import React from 'react'
import Footer from "../../components/layaouts/Footer/Footer"
import ProductCard from "../../components/Home/ProductCard"
import CategoryCard from "../../components/Home/CategoryCard"
import { Button } from "react-bootstrap"
import "./customer.css"
import { Link } from 'react-router-dom'

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
        <section className="sect Categories my-5 text-start">
          <h3>Buscar por Categoría </h3>
          <div className="card-container my-4">
              <CategoryCard img_src={"images/categories/almacen.svg"} title="Almacén"/>
              <CategoryCard img_src={"images/categories/bebidas.svg"} title="Bebidas"/>
              <CategoryCard img_src={"images/categories/lacteos.svg"} title="Lácteos"/>
              <CategoryCard img_src={"images/categories/carnesypescados.svg"} title="Carnes & Pescados"/>
              <CategoryCard img_src={"images/categories/frutas-verduras.svg"} title="Frutas & Verduras"/>
              <CategoryCard img_src={"images/categories/panaderia.svg"} title="Panadería"/>
              <CategoryCard img_src={"images/categories/congelados.svg"} title="Congelados"/>
              <CategoryCard img_src={"images/categories/limpieza.svg"} title="Limpieza"/>
          </div>
        </section>
        <section className="sect productsPRVW">
          <div className="prod-head">
            <h3>Productos en Tendencia</h3>
            <Button className="cat-btn">
              <Link to='/products'>
              Ver todos
              </Link>
            </Button>
          </div>
          <div className="categories-filter-container my-4 w-100">
              <Button className="cat-btn">Almacén</Button>
              <Button className="cat-btn">Bebidas</Button>
              <Button className="cat-btn">Lácteos</Button>
              <Button className="cat-btn">Carnes & pescados</Button>
              <Button className="cat-btn">Frutas & verduras</Button>
              <Button className="cat-btn">Panadería</Button>
              <Button className="cat-btn">Congelados</Button>
              <Button className="cat-btn">Limpieza</Button>
          </div>
          <div className="product-cards row my-5 py-4">
              <ProductCard imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <ProductCard imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <ProductCard imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <ProductCard imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
              <ProductCard imgSrc='./images/apple.png' name='Manzana Roja' price="50"/>
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

