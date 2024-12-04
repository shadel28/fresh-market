import { React, useState } from "react";
import SideBar from "../../components/layaouts/SideBar";
import DataTable from "../../components/layaouts/DataTable";
import { Container, Box, Typography, Button, Toolbar } from "@mui/material";
import { useGetProducts } from "../../api/FreshMarket";
import OrderModal from "../../components/OrderModal";

function Inventory() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  const fields = [
    { fieldName: "id", columnName: "", hideable: true },
    { fieldName: "img", columnName: "", width: 50 },
    { fieldName: "nombre", columnName: "Nombre", width: 250 },
    { fieldName: "cantidad", columnName: "Cantidad", width: 150 },
    { fieldName: "precio", columnName: "Precio", width: 150 },
    { fieldName: "categoria", columnName: "Categoria", width: 150 },
    { fieldName: "unidad", columnName: "Unidad Medida", width: 150 },
  ];

  const { data: products = [] } = useGetProducts();

  const getProductos = () =>
    products.map((p, index) => ({
      id: index,
      img: p.imagen_url,
      nombre: p.nombre,
      cantidad: p.cantidad_disponible,
      precio: `$ ${p.precio_unitario}`,
      categoria: p.nombre_categoria,
      unidad: p.nombre_unidad,
    }));

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
        backgroundColor: "rgba(239, 239, 240);, 1",
      }}
      disableGutters
      maxWidth={true}
    >
      <SideBar props="/inventory" />
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
          Inventario
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#198754" }}
            onClick={() => setIsDialogOpen(true)}
          >
            Crear Pedido
          </Button>
        </Box>
      </Toolbar>

      <DataTable fields={fields} rowsFunc={getProductos()} />

      <OrderModal
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-hidden={!isDialogOpen ? "true" : undefined}
      />
    </Container>
  );
}

export default Inventory;
