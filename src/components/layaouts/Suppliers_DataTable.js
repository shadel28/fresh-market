import * as React from "react";
import { Button} from '@mui/material';
import { useState } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { orange, red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { Toolbar, Box, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Snackbar, Alert } from '@mui/material';
import { useGetSuppliers } from "../../api/FreshMarket";
import axios from "axios";

const paginationModel = { page: 0, pageSize: 10 };

export default function DataTable({ props }) {
  const { data: proveedores = [], refetch } = useGetSuppliers();
  const getProveedores = () =>
    proveedores.map((p, index) => ({
      id: p.id_proveedor,
      nombre: p.nombre,
      no_telefono: p.no_telefono,
      correo: p.correo,
  }));

  const [currentRow, setCurrentRow] = useState({id: "", nombre: "", no_telefono: "",  correo: "" }); // Para tomar los datos del row
  const [open, setOpen] = useState(false); // Para el dialog (modal)
  const [isEditing, setIsEditing] = useState(false); // Para ver si se está editando o registrando
  const [showPopup, setShowPopup] = useState({ open: false, message: '', severity: '' }); // Estado para el popup
  
  const handleChange = (e) => {
    setCurrentRow({ ...currentRow, [e.target.name]: e.target.value });
  };
  const handleDialog = () => {
    setOpen(!open);
    if (!open) setCurrentRow({ id: '', nombre: '',no_telefono: '', correo: '' });
  };
  const handleEditClick = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/deleteSupplier/${id}`);
      console.log("Response: ", response.data);
      setShowPopup({ open: true, message: 'Usuario eliminado correctamente.', severity: 'success' });
      refetch();
    } catch (error) {
      setShowPopup({ open: true, message: 'Error al eliminar el usuario.', severity: 'error' });
      console.error('Error al eliminar el usuario:', error);
    }
    
  }

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if(isEditing){
        const response = await axios.put("/updateSupplier", currentRow);
        console.log("Response: ", response.data);
        setShowPopup({ open: true, message: 'Proveedor modificado correctamente.', severity: 'success' });
      }else{
        const response = await axios.post("/addSupplier", currentRow);
        console.log("Response: ", response.data);
        setShowPopup({ open: true, message: 'Proveedor registrado correctamente.', severity: 'success' });
      }
      refetch();
    } catch (error) {
      setShowPopup({ open: true, message: 'Error al modificar el proveedor.', severity: 'error' });
      console.error('Error al modificar el proveedor:', error);
    }
    setOpen(false);
  };

/*
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
*/
  const columns = props.map((f) => ({
    field: f.fieldName,
    headerName: f.columnName,
    width: f.width,
    renderCell:
      (params) => {
        if (f.fieldName === "actions") {
          return (
            <>
              <Button
                variant="outlined"
                sx={{ 
                  borderColor: orange[500], 
                  color: orange[500],
                  '&:hover': {
                    backgroundColor: orange[50],
                    borderColor: orange[500] 
                  },
                  '&:focus': {
                    outline: 'none',
                  }
                }}
                onClick={() => {
                  setIsEditing(true);
                  handleEditClick(params.row);
                }}
              >Editar</Button>
              <Button
                variant="outlined"
                color='error'
                sx={{ 
                  borderColor: red[500],
                  '&:hover': {
                    backgroundColor: red[50],
                    borderColor: red[500] 
                  },
                  '&:focus': {
                    outline: 'none',
                  }
                }}
                style={{marginLeft:".5rem"}}
                onClick={() => {handleDelete(params.row.id)}}
              > <DeleteIcon /> </Button>
            </>
          );
        } else {
          // Render por defecto para otras columnas
          return params.value;
        }
      },
  }));
  return (
    <>
      <Toolbar
        sx={{
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "#fff",
          marginRight: "3.2rem",
          marginTop: "3rem",
        }}
      >
        <Typography fontSize="1.3rem" fontWeight="600" sx={{ color: "#000" }}>
          Proveedores
        </Typography>
        <Box>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: "#198754" }}
            onClick={() => {
              setIsEditing(false);
              handleDialog();
              setOpen(true);
            }}
          >
            Agregar Proveedor
          </Button>
        </Box>
      </Toolbar>
      <Paper
        sx={{
          width: "95%",
          height: 500,
        }}
      >
        <DataGrid
          rows={getProveedores()}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{border: 0,}}
        />
      </Paper>

      <Dialog open={open}>
      <DialogTitle>{isEditing ? 'Editar Proveedor' : 'Añadir Proveedor'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="nombre"
          label="Nombre"
          fullWidth
          variant="outlined"
          value={currentRow.nombre}
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="no_telefono"
          label="Telefono"
          fullWidth
          variant="outlined"
          value={currentRow.no_telefono}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="correo"
          label="Correo"
          fullWidth
          variant="outlined"
          value={currentRow.correo}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialog} sx={{color:"red"}}>
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Guardar
        </Button>
      </DialogActions>
      </Dialog>

      <Snackbar
        open={showPopup.open}
        autoHideDuration={4000}
        onClose={() => setShowPopup({ ...showPopup, open: false })}
      >
        <Alert
          onClose={() => setShowPopup({ ...showPopup, open: false })}
          severity={showPopup.severity}
          sx={{ width: '100%' }}
        >
          {showPopup.message}
        </Alert>
      </Snackbar>
    </>
  );
}
