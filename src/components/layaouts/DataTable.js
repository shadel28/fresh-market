import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useGetProducts } from "../../api/FreshMarket";
import { Chip } from "@mui/material";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ props }) {
  const { data: products = [] } = useGetProducts();

  const checkQuantity = (q) => {
    if (q > 0) return true;
    else return false;
  };

  const getProductos = () =>
    products.map((p, index) => ({
      id: p.id_producto,
      img: p.imagen_url, // Guardamos solo la URL en la propiedad 'img'
      nombre: p.nombre,
      cantidad: p.cantidad_disponible,
      precio: `$ ${p.precio_unitario}`,
      categoria: p.nombre_categoria,
      unidad: p.nombre_unidad,
    }));

  const columns = props.map((f) => ({
    field: f.fieldName,
    headerName: f.columnName,
    width: f.width,
    renderCell:
      // f.fieldName === "img"
      //   ? (params) => (
      //       <img
      //         src={params.value}
      //         alt="producto"
      //         style={{ width: "40px", height: "40px", objectFit: "cover" }}
      //       />
      //     )
      //   : undefined,
      (params) => {
        if (f.fieldName === "img") {
          return (
            <img
              src={params.value}
              alt="producto"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          );
        } else if (f.fieldName === "cantidad") {
          // Resaltamos cantidades en rojo si son 0
          return (
            <Chip
              label={params.value}
              sx={{
                width: "80%",
                backgroundColor:
                  params.value === 0 ? " rgba(217, 30, 24, 0.6);" : "#c8f7c5",
                color: params.value === 0 ? "#f22613" : "#26a65b",
                fontWeight: "bold",
              }}
            />
          );
        } else {
          // Render por defecto para otras columnas
          return params.value;
        }
      },
  }));

  return (
    <Paper
      sx={{
        width: "95%",
        height: 500,
      }}
    >
      <DataGrid
        rows={getProductos()}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
