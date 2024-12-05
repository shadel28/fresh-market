import React, { useState } from "react";
import PromotionalBanners from "../../components/PromotionalBanner/PromotionalBanners";
import Filters from "../../components/Filters/Filters";
import ProductList from "../../components/ProductsList/ProductList";
import Header from "../../components/layaouts/Header/Header";
import Footer from "../../components/layaouts/Footer/Footer";
import "./customer.css";

function Products() {
  // Estado para los filtros
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [showAll, setShowAll] = useState(true);
  const [showOfertas, setShowOfertas] = useState(false);
  const [showNuevos, setShowNuevos] = useState(false);
  const [minPrecio, setMinPrecio] = useState("");
  const [maxPrecio, setMaxPrecio] = useState("");

  // Handlers para actualizar los filtros
  const handleShowAllChange = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setShowOfertas(false);
      setShowNuevos(false);
      setMinPrecio("");
      setMaxPrecio("");
    }
  };

  const handleOfertasChange = () => setShowOfertas((prev) => !prev);
  const handleNuevosChange = () => setShowNuevos((prev) => !prev);
  const handleMinPrecioChange = (e) => setMinPrecio(e.target.value);
  const handleMaxPrecioChange = (e) => setMaxPrecio(e.target.value);

  return (
    <>
      <Header
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />
      <div className="container" style={{ marginTop: "8rem" }}>
        <div className="row">
          <div className="col-md-2">
            <Filters
              minPrecio={minPrecio}
              onMinPrecioChange={handleMinPrecioChange}
              maxPrecio={maxPrecio}
              onMaxPrecioChange={handleMaxPrecioChange}
              categoriaSeleccionada={categoriaSeleccionada}
              setCategoriaSeleccionada={setCategoriaSeleccionada} // Pasamos la función para actualizar la categoría
              showAll={showAll}
              onShowAllChange={handleShowAllChange}
              showOfertas={showOfertas}
              onOfertasChange={handleOfertasChange}
              showNuevos={showNuevos}
              onNuevosChange={handleNuevosChange}
            />
          </div>
          <div
            className="col-md-10 d-flex flex-column justify-content-center align-items-center"
            style={{ textAlign: "start", gap: "4rem" }}
          >
            <PromotionalBanners />
            <div style={{ width: "100%" }}>
              <ProductList
                categoriaSeleccionada={categoriaSeleccionada}
                showAll={showAll}
                showOfertas={showOfertas}
                showNuevos={showNuevos}
                minPrecio={minPrecio}
                maxPrecio={maxPrecio}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
