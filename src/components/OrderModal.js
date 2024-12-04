import React, { useState } from "react";
import { Box, FormControl, FormLabel, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  useGetProducts,
  useGetSuppliers,
  usePostOrder,
} from "../api/FreshMarket";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  MenuItem,
} from "@mui/material";

export default function FormDialog({ open, onClose }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      proveedor: "",
      cantidad: "",
      producto: "",
    },
  });

  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { data: suppliers = [] } = useGetSuppliers();
  const { data: products = [] } = useGetProducts();

  const productPrice = (id) => {
    const pr = products.find((p) => p.id_producto === id);
    if (pr) setPrice(pr.precio_unitario);
    else setPrice(0);
  };

  const handleSupplier = (e) => {
    setSelectedSupplier(e.target.value);
  };

  const handleProduct = (e) => {
    setSelectedProduct(e.target.value);
    productPrice(Number(e.target.value));
  };

  const { mutate: postOrder } = usePostOrder();
  const orderTotal = price * quantity;

  const handlePurchaseOrder = (data) => {
    const purchaseOrder = {
      id_proveedor: data.proveedor,
      id_producto: data.producto,
      cantidad: quantity,
      total: orderTotal,
    };

    postOrder({ orderData: purchaseOrder });

    reset();
    setSelectedSupplier("");
    setSelectedProduct("");
    setPrice(0);
    setQuantity(0);

    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="edit-apartment">
        <form onSubmit={handleSubmit(handlePurchaseOrder)}>
          <DialogContent>
            <DialogContentText>
              Complete los datos para crear la orden de compra.
            </DialogContentText>
          </DialogContent>

          <DialogContent>
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Cantidad Producto
              </FormLabel>
              <OutlinedInput
                required
                {...register("cantidad")}
                sx={{ height: { lg: "3rem" } }}
                type="number"
                inputProps={{
                  min: 0,
                }}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </FormControl>

            <FormControl fullWidth>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Proveedor
              </FormLabel>
              <Select
                id="demo-simple-select"
                value={selectedSupplier}
                {...register("proveedor")}
                onChange={handleSupplier}
              >
                {suppliers.map((s, index) => (
                  <MenuItem value={s.id_proveedor} key={index}>
                    {s.nombre_proveedor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Producto
              </FormLabel>
              <Select
                id="demo-simple-select"
                value={selectedProduct}
                {...register("producto")}
                onChange={handleProduct}
              >
                {products.map((p, index) => (
                  <MenuItem value={p.id_producto} key={index}>
                    {p.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box
              sx={{
                marginTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography fontSize="1rem" fontWeight="700">
                Precio Unitario Producto: {price}
              </Typography>

              <Typography fontSize="1rem" fontWeight="700">
                Total: {orderTotal}
              </Typography>
            </Box>

            <DialogActions>
              <Button
                onClick={onClose}
                sx={{ backgroundColor: "#198754", color: "#fff" }}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                sx={{ backgroundColor: "#198754", color: "#fff" }}
              >
                Ordenar
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
