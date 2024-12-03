
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductLis.css';
import { Carousel, Button, Modal, Form } from 'react-bootstrap';
import ProductCard from '../Home/ProductCard'; 

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
              addToCart={addToCart} 
            >
           
              <Form.Control
                type="number"
                min="1"
                max={producto.cantidad_disponible}
                defaultValue="1"
                onChange={(e) => producto.cantidadSeleccionada = e.target.value} 
              />
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

function ProductList({ categoriaSeleccionada, showAll, showOfertas, showNuevos, minPrecio, maxPrecio }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/products/');
        setProductos(response.data);
      } catch (err) {
        setError('Error al obtener los productos');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filtrarProductos = (productos) => {
    return productos.filter((producto) => {
      const cumpleCategoria = categoriaSeleccionada === 'Todos' || producto.nombre_categoria === categoriaSeleccionada;
      const cumpleOferta = !showOfertas || producto.oferta;
      const cumpleNuevo = !showNuevos || producto.nuevo;
      const cumplePrecioMin = minPrecio === '' || parseFloat(producto.precio_unitario.replace('RD$', '')) >= parseFloat(minPrecio);
      const cumplePrecioMax = maxPrecio === '' || parseFloat(producto.precio_unitario.replace('RD$', '')) <= parseFloat(maxPrecio);

      return cumpleCategoria && cumpleOferta && cumpleNuevo && cumplePrecioMin && cumplePrecioMax;
    });
  };

  const agregarAlCarrito = (producto) => {
    const cantidadSeleccionada = producto.cantidadSeleccionada || 1;

    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);
      if (productoExistente) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + parseInt(cantidadSeleccionada) }
            : item
        );
      }
      return [...prevCarrito, { ...producto, cantidad: parseInt(cantidadSeleccionada) }];
    });

  
    setProductos((prevProductos) =>
      prevProductos.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad_disponible: item.cantidad_disponible - parseInt(cantidadSeleccionada) }
          : item
      )
    );
  };

  const categorias = [
    'Almacén',
    'Bebidas',
    'Lácteos',
    'Carnes & Pescados',
    'Frutas & Verduras',
    'Panadería',
    'Congelados',
    'Limpieza'
  ];

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="products-list">
      {productos.length > 0 &&
        categorias.map(
          (categoria) =>
            (categoriaSeleccionada === 'Todos' || categoriaSeleccionada === categoria) && (
              <div key={categoria}>
                <h2>{categoria}</h2>
                <ProductCarousel productos={filtrarProductos(productos.filter((p) => p.nombre_categoria === categoria))} addToCart={agregarAlCarrito} />
              </div>
            )
        )}

      
    </div>
  );
}

export default ProductList;












