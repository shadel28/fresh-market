
import React from 'react';
import './Filters.css';

const Filters = ({
  minPrecio,
  onMinPrecioChange,
  maxPrecio,
  onMaxPrecioChange,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) => {
  const categorias = [
    "Todos", "Almacén", "Bebidas", "Lácteos", "Carnes & Pescados",
    "Frutas & Verduras", "Panadería", "Congelados", "Limpieza"
  ];

  return (
    <div className="filters-container">
      <div className="filter-item price-row">
        <div className="price-input-container">
          
          <label htmlFor="min-precio">Desde:</label>
          <input
            id="min-precio"
            type="number"
            className="price-input"
            value={minPrecio}
            onChange={onMinPrecioChange}
          />
        </div>

        <div className="price-input-container">
          <label htmlFor="max-precio">Hasta:</label>
          <input
            id="max-precio"
            type="number"
            className="price-input"
            value={maxPrecio}
            onChange={onMaxPrecioChange}
          />
        </div>
      </div>

      

      <div className="filter-item">
        <div className="categories-container">
          {categorias.map((categoria) => (
            <a
              href="#!"
              key={categoria}
              className={`category-link ${categoriaSeleccionada === categoria ? 'selected' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCategoriaSeleccionada(categoria);
              }}
            >
              {categoria}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
