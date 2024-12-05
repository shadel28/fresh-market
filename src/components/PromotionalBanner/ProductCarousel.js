import React from "react";
import { Carousel, Button, Form } from "react-bootstrap";
import ProductCard from "../Home/ProductCard"; // Ajusta según tu estructura de carpetas

function ProductCarousel({ productos, addToCart }) {
  const groupProducts = (products, groupSize) => {
    const grouped = [];
    for (let i = 0; i < products.length; i += groupSize) {
      grouped.push(products.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedProducts = groupProducts(productos, 4);

  return (
    <Carousel interval={3000} indicators={false} controls={true}>
      {groupedProducts.length > 0 ? (
        groupedProducts.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between">
              {group.map((producto) => (
                <ProductCard
                  key={producto.id_producto}
                  id_product={producto.id_producto}
                  imgSrc={producto.imagen_url}
                  name={producto.nombre}
                  price={producto.precio_unitario}
                  unidad_medida={producto.nombre_unidad}
                >
                  <Form.Control
                    type="number"
                    min="1"
                    max={producto.cantidad_disponible}
                    defaultValue="1"
                    onChange={(e) =>
                      (producto.cantidadSeleccionada = e.target.value)
                    }
                  />
                  <Button
                    onClick={() =>
                      addToCart(producto, producto.cantidadSeleccionada || 1)
                    }
                  >
                    Agregar al carrito
                  </Button>
                </ProductCard>
              ))}
            </div>
          </Carousel.Item>
        ))
      ) : (
        <p>No hay productos para mostrar</p>
      )}
    </Carousel>
  );
}

export default ProductCarousel;
