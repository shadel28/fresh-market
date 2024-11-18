import Header from "../../components/layaouts/Header/Header";
import React, { useState } from "react";
import Footer from "../../components/layaouts/Footer/Footer";
import ProductCard from "../../components/Home/ProductCard";
import CategoryCard from "../../components/Home/CategoryCard";
import { Button } from "react-bootstrap";
import "./customer.css";
import { Link } from "react-router-dom";
import { useGetProducts } from "../../api/FreshMarket";

function Home() {
  const { data: products = [] } = useGetProducts();
  const [categoria, setCategoria] = useState("Almacén");

  const filterProducts = (cat) => {
    console.log("categoria ", cat);
    setCategoria(cat);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section className="banner">
          <div className="banner-content">
            <img src="./images/offer1.png" className="img1" alt="" />
            <img src="./images/offer2.png" className="img2" alt="" />
          </div>
        </section>
        <section className="sect Categories my-5 text-start">
          <h3>Buscar por Categoría </h3>
          <div className="card-container my-4">
            {/* Muestra las categorías */}
            <CategoryCard
              img_src={"images/categories/almacen.svg"}
              title="Almacén"
            />
            <CategoryCard
              img_src={"images/categories/bebidas.svg"}
              title="Bebidas"
            />
            <CategoryCard
              img_src={"images/categories/lacteos.svg"}
              title="Lácteos"
            />
            <CategoryCard
              img_src={"images/categories/carnesypescados.svg"}
              title="Carnes & Pescados"
            />
            <CategoryCard
              img_src={"images/categories/frutas-verduras.svg"}
              title="Frutas & Verduras"
            />
            <CategoryCard
              img_src={"images/categories/panaderia.svg"}
              title="Panadería"
            />
            <CategoryCard
              img_src={"images/categories/congelados.svg"}
              title="Congelados"
            />
            <CategoryCard
              img_src={"images/categories/limpieza.svg"}
              title="Limpieza"
            />
          </div>
        </section>
        <section className="sect productsPRVW">
          <div className="prod-head">
            <h3>Productos en Tendencia</h3>
            <Button className="cat-btn">
              <Link to="/products">Ver todos</Link>
            </Button>
          </div>
          <div className="categories-filter-container my-4 w-100">
            {[...new Set(products.map((p) => p.nombre_categoria))].map(
              (categoria, index) => (
                <Button
                  key={index}
                  className="cat-btn"
                  onClick={() => filterProducts(categoria)}
                >
                  {categoria}
                </Button>
              )
            )}
          </div>
          <div className="product-cards row my-5 py-4">
            {products
              .filter((p) => p.nombre_categoria === categoria)
              .slice(0, 5)
              .map((p, index) => (
                <ProductCard
                  key={index}
                  id_product={p.id_producto}
                  imgSrc={p.imagen_url}
                  name={p.nombre}
                  price={p.precio_unitario}
                  unidad_medida={p.nombre_unidad}
                />
              ))}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
