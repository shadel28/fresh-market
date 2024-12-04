// Esta es la pagina de proveedores
import React from 'react'
import SideBar from "../../components/layaouts/SideBar";
import DataTable from "../../components/layaouts/Suppliers_DataTable";
import { Container } from "@mui/material";
function Supplier() {

  const fields = [
    { fieldName: "nombre", columnName: "Nombre", width: 250 },
    { fieldName: "no_telefono", columnName: "Telefono", width: 150 },
    { fieldName: "correo", columnName: "Correo", width: 250},
    { fieldName: "actions", columnName: "Acciones", width: 250 }
  ];

  return (
    <Container
      sx={{
        display: "flex",
        alignContent: "center",
        flexDirection: "column",
        height: "100vh",
        padding: "2rem 0",
        paddingLeft: "16rem",
        backgroundColor: "rgba(239, 239, 240);, 1",
      }}
      disableGutters
      maxWidth
    >
      <SideBar />
      <DataTable props={fields} />
    </Container>
  )
}

export default Supplier