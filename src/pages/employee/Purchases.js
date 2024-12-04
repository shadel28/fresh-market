import React, { useEffect, useContext } from "react";
import { Container, Typography, Toolbar } from "@mui/material";
import SideBar from "../../components/layaouts/SideBar";
import DataTable from "../../components/layaouts/DataTable";
import { useGetOrders } from "../../api/FreshMarket";
import { ProductsContext } from "../../components/context/ProductsContext";

function Purchases() {
  const { data: pedidos = [] } = useGetOrders();
  const { initializeOrders } = useContext(ProductsContext);

  useEffect(() => {
    if (pedidos.length > 0) {
      const formattedOrders = pedidos.map((o) => ({
        id: o.id_producto,
        img: o.imagen_url,
        nombre: o.nombre,
        proveedor: o.nombre_proveedor,
        cantidad: parseInt(o.cantidad),
        unitario: parseInt(o.precio_unitario - o.precio_unitario * 0.25),
        total:
          parseInt(o.cantidad) *
          parseInt(o.precio_unitario - o.precio_unitario * 0.25),
      }));
      initializeOrders(formattedOrders);
    }
  }, [pedidos, initializeOrders]);

  const fields = [
    { fieldName: "id", columnName: "", hideable: true },
    { fieldName: "img", columnName: "", width: 50 },
    { fieldName: "nombre", columnName: "Producto", width: 150 },
    { fieldName: "proveedor", columnName: "Proveedor", width: 150 },
    { fieldName: "cantidad", columnName: "Cantidad", width: 150 },
    { fieldName: "unitario", columnName: "Precio Compra", width: 150 },
    { fieldName: "total", columnName: "Total", width: 100 },
    { fieldName: "confirmar", columnName: "Acciones", width: 150 },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        height: "100vh",
        padding: "5rem 0",
        paddingLeft: "16rem",
        backgroundColor: "rgba(239, 239, 240, 1)",
      }}
      disableGutters
      maxWidth={true}
    >
      <SideBar currentPath="/purchases" />
      <Toolbar
        sx={{
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          marginRight: "3.2rem",
          marginTop: "3rem",
        }}
      >
        <Typography fontSize="1.3rem" fontWeight="600" sx={{ color: "#000" }}>
          Pedidos
        </Typography>
      </Toolbar>
      <DataTable fields={fields} />
    </Container>
  );
}

export default Purchases;
