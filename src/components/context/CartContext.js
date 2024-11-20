import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]); // Nuevo estado para manejar los productos
  const [clientId, setClientId] = useState();

  const addToCart = () => {
    setProductCount(productCount + 1);
  };

  const addProductToCart = (p) => {
    addToCart();

    // Verificar si el producto ya está en el array
    const existingProductIndex = products.findIndex(
      (product) => product.name === p.name
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, actualizamos su cantidad
      const updatedProducts = products.map((product, index) => {
        if (index === existingProductIndex) {
          return {
            ...product,
            quantity: parseInt(product.quantity) + parseInt(p.quantity),
          };
        }
        return product;
      });

      setProducts(updatedProducts);
    } else {
      // Si el producto no existe, lo agregamos al array
      setProducts([...products, p]);
    }
  };

  const deleteProductFromCart = (id) => {
    const newProducts = products.filter((item, index) => index !== id);
    setProducts(newProducts);
    setProductCount(productCount - 1);
  };

  const empymCart = () => {
    setProducts([]);
    setProductCount(0);
  };

  // Función para actualizar la cantidad de un producto
  const updateProductQuantity = (index, newQuantity) => {
    const updatedProducts = products.map((product, i) => {
      if (i === index) {
        return {
          ...product,
          quantity: parseInt(newQuantity, 10),
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  const handleClientId = (id) => {
    setClientId(id);
  };

  return (
    <CartContext.Provider
      value={{
        productCount,
        addToCart,
        products,
        addProductToCart,
        deleteProductFromCart,
        updateProductQuantity,
        empymCart,
        clientId,
        handleClientId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
