import React, { useContext } from "react";
import { useGetProducts } from "../../api/FreshMarket";
import ProductCarousel from "../PromotionalBanner/ProductCarousel";
import { CartContext } from "../context/CartContext";

function ProductList({
  categoriaSeleccionada,
  showAll,
  showOfertas,
  showNuevos,
  minPrecio,
  maxPrecio,
}) {
  const { data: productos = [], isLoading, error } = useGetProducts();
  const { addProductToCart } = useContext(CartContext); // Accede al contexto del carrito

  const filtrarProductos = (productos) => {
    return productos.filter((p) => {
      const cumpleCategoria =
        categoriaSeleccionada === "Todos" ||
        p.nombre_categoria === categoriaSeleccionada;
      const cumpleOferta = !showOfertas || p.oferta;
      const cumpleNuevo = !showNuevos || p.nuevo;
      const cumplePrecioMin =
        minPrecio === "" || p.precio_unitario >= parseFloat(minPrecio);
      const cumplePrecioMax =
        maxPrecio === "" || p.precio_unitario <= parseFloat(maxPrecio);

      return (
        cumpleCategoria &&
        cumpleOferta &&
        cumpleNuevo &&
        cumplePrecioMin &&
        cumplePrecioMax
      );
    });
  };

  const handleAddToCart = (producto, cantidadSeleccionada) => {
    const productoConCantidad = {
      ...producto,
      quantity: cantidadSeleccionada,
    };
    addProductToCart(productoConCantidad); // Usa la lógica del contexto
  };

  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error al cargar los productos.</p>;

  const categorias = [
    "Almacén",
    "Bebidas",
    "Lácteos",
    "Carnes & Pescados",
    "Frutas & Verduras",
    "Panadería",
    "Congelados",
    "Limpieza",
  ];

  return (
    <div className="products-list">
      {productos.length > 0 &&
        categorias.map(
          (categoria) =>
            (categoriaSeleccionada === "Todos" ||
              categoriaSeleccionada === categoria) && (
              <div key={categoria}>
                <h2>{categoria}</h2>
                <ProductCarousel
                  productos={filtrarProductos(
                    productos.filter((p) => p.nombre_categoria === categoria)
                  )}
                  addToCart={(producto, cantidad) =>
                    handleAddToCart(producto, cantidad)
                  }
                />
              </div>
            )
        )}
    </div>
  );
}

export default ProductList;
