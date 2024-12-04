// Esta es la pagina de proveedores
import React from "react";
import SideBar from "../../components/layaouts/SideBar";
import { Container, Box, Typography, Button, Toolbar } from "@mui/material";

function Supplier() {
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
      {/* Paso la ruta actual como currentPath */}
      <SideBar currentPath="/supplier" />
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
          Proveedores
        </Typography>
        <Box>
          <Button variant="contained" sx={{ backgroundColor: "#198754" }}>
            Crear Pedido
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
}

export default Supplier;
