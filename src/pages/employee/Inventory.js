import React from "react";
import SideBar from "../../components/layaouts/SideBar";
import DataTable from "../../components/layaouts/DataTable";
import { Container, Box, Typography, Button, Toolbar } from "@mui/material";

function Inventory() {
  const fields = [
    { fieldName: "img", columnName: "", width: 50 },
    { fieldName: "nombre", columnName: "Nombre", width: 250 },
    { fieldName: "cantidad", columnName: "Cantidad", width: 150 },
    { fieldName: "precio", columnName: "Precio", width: 150 },
    { fieldName: "categoria", columnName: "Categoria", width: 150 },
    { fieldName: "unidad", columnName: "Unidad Medida", width: 150 },
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
        backgroundColor: "rgba(239, 239, 240);, 1",
      }}
      disableGutters
      maxWidth
    >
      <SideBar />
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
          <Button variant="contained" sx={{ backgroundColor: "#198754" }}>
            Crear Pedido
          </Button>
        </Box>
      </Toolbar>

      <DataTable props={fields} />
    </Container>
  );
}

export default Inventory;
