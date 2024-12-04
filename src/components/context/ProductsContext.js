import React, { createContext, useState, useCallback } from "react";
import { useUpdateProductQuantity } from "../../api/FreshMarket";

// Crear el contexto
export const ProductsContext = createContext();

// Crear el proveedor del contexto
export const ProductsProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // Estado para manejar los pedidos
  const { mutate: updateProductQuantity } = useUpdateProductQuantity();

  // Inicializar pedidos
  const initializeOrders = useCallback((newOrders) => {
    setOrders(newOrders);
  }, []);

  // Confirmar la compra y actualizar el inventario
  const confirmPurchase = (orderId, quantity) => {
    console.log("orderId ", orderId, "quantity ", quantity);
    const productData = { id_producto: orderId, cantidad_disponible: quantity };

    updateProductQuantity(
      { productData },
      {
        onSuccess: () => {
          // Actualizar el estado eliminando el pedido confirmado
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId)
          );
        },
        onError: (error) => {
          console.error("Error al actualizar el inventario:", error);
        },
      }
    );
  };

  return (
    <ProductsContext.Provider
      value={{ orders, initializeOrders, confirmPurchase }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
