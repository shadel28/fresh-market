import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper, Button, Chip } from "@mui/material";
import { ProductsContext } from "../../components/context/ProductsContext";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ fields, rowsFunc }) {
  const { orders, confirmPurchase, deleteOrder } = useContext(ProductsContext);

  const columns = fields.map((f) => ({
    field: f.fieldName,
    headerName: f.columnName,
    width: f.width,
    renderCell: (params) => {
      if (f.fieldName === "img") {
        return (
          <img
            src={params.value}
            alt="producto"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
        );
      } else if (f.fieldName === "cantidad") {
        return (
          <Chip
            label={params.value}
            sx={{
              backgroundColor: params.value === 0 ? "#f8d7da" : "#d4edda",
              color: params.value === 0 ? "#721c24" : "#155724",
            }}
          />
        );
      } else if (f.fieldName === "confirmar") {
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                confirmPurchase(params.row.id, parseInt(params.row.cantidad))
              }
            >
              Confirmar
            </Button>
          </div>
        );
      } else {
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
        rows={rowsFunc ? rowsFunc : orders}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10]}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
        columnVisibilityModel={{
          id: false,
        }}
      />
    </Paper>
  );
}
