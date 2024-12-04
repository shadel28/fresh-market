import React, { useContext, useState } from "react";
import Header from "../../components/layaouts/Header/Header";
import CardProduct from "../../components/CardProduct/CardProduct";
import "./customer.css";
import { MdShoppingBag } from "react-icons/md";
import { TbArrowNarrowLeft } from "react-icons/tb";
import { IoIosLock } from "react-icons/io";
import Footer from "../../components/layaouts/Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormLabel, Button, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { CartContext } from "../../components/context/CartContext";
import ScreenDialog from "../../components/ScreenDialog";
import { useSendPayment } from "../../api/FreshMarket";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function Cart() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar el diálogo
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      metodo: "",
    },
  });

  const handleDialogClose = () => {
    reset();
    empymCart();
    setIsDialogOpen(false);
  };

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const { products, empymCart, clientId } = useContext(CartContext);

  var subtotal = products.map((p) => p.price * p.quantity);
  var totals = subtotal.reduce((acc, calc) => {
    return acc + calc;
  }, 0);

  var itbis = (totals * 18) / 100;

  const { mutate: sendPayment } = useSendPayment();

  const handlePayment = (data) => {
    const factura = {
      id_cliente: clientId,
      id_metodo_pago: data.metodo,
      subtotal: totals,
      total: totals + itbis,
      itbis,
      productos: products.map((p) => ({
        id_producto: p.id_product,
        cantidad: p.quantity,
        precio_unitario: p.price,
      })),
    };

    sendPayment({ paymentInfo: factura }); // Llama a la función que envía la solicitud al servidor
    setIsDialogOpen(true);
  };

  return (
    <>
      <Header />
      <section className="cart">
        <div className="cart_row">
          <div className="cart__info">
            <div>
              <MdShoppingBag className="cart__info--icon" />
              <h1>Mi Carrito</h1>
            </div>
            <span>{products.length} Productos</span>
          </div>
          <div className="cart__products">
            <div className="cart__products--titles">
              <div className="detalle">
                <span>Detalle del Producto</span>
              </div>
              <div className="info">
                <span>Precio</span>
                <span>Cantidad</span>
                <span>Total</span>
              </div>
            </div>
            <CardProduct />
          </div>
          <button className="shop-btn">
            <Link to="../products">
              <TbArrowNarrowLeft className="shop-btn__icon" />
              Continuar Comprando
            </Link>
          </button>
        </div>
        <div className="cart_row">
          <div className="payment">
            <span>Detalles de pago</span>
            <small>Completa tu compra validando tus detalles de pago.</small>
          </div>

          <form onSubmit={handleSubmit(handlePayment)}>
            <FormControl fullWidth>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Correo
              </FormLabel>
              <OutlinedInput
                required
                {...register("correo")}
                sx={{ height: { lg: "3rem" } }}
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
                Método de pago
              </FormLabel>
              <Select
                id="demo-simple-select"
                value={selectedPaymentMethod}
                {...register("metodo")}
                onChange={handleChange}
              >
                <MenuItem value="1" key={1}>
                  Efectivo
                </MenuItem>{" "}
                {/*para mas simplicidad los valores seran id_metodo_pago */}
                <MenuItem value="2" key={2}>
                  Tarjeta de débito
                </MenuItem>
                <MenuItem value="3" key={3}>
                  Tarjeta de crédito
                </MenuItem>
                <MenuItem value="4" key={4}>
                  Paypal
                </MenuItem>
                <MenuItem value="5" key={5}>
                  Puntos FreshMarket
                </MenuItem>
              </Select>
            </FormControl>

            {selectedPaymentMethod === "2" && (
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    fontWeight: "700",
                    color: "#000",
                    margin: "2rem 0 .4rem 0",
                  }}
                >
                  Número de tarjeta de débito
                </FormLabel>
                <OutlinedInput
                  type="text"
                  placeholder="Ingrese el número de su tarjeta"
                  {...register("numeroDebito")}
                  required
                />
              </FormControl>
            )}

            {selectedPaymentMethod === "3" && (
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    fontWeight: "700",
                    color: "#000",
                    margin: "2rem 0 .4rem 0",
                  }}
                >
                  Número de tarjeta de crédito
                </FormLabel>
                <OutlinedInput
                  type="text"
                  placeholder="Ingrese el número de su tarjeta de crédito"
                  {...register("numeroCredito")}
                  required
                />
              </FormControl>
            )}

            {selectedPaymentMethod === "4" && (
              <FormControl fullWidth>
                <FormLabel
                  sx={{
                    fontWeight: "700",
                    color: "#000",
                    margin: "2rem 0 .4rem 0",
                  }}
                >
                  Cuenta de PayPal
                </FormLabel>
                <OutlinedInput
                  type="text"
                  placeholder="Ingrese el número de su cuenta Paypal"
                  {...register("numeroCredito")}
                  required
                />
              </FormControl>
            )}

            <FormControl fullWidth>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Dirección de envio
              </FormLabel>
              <OutlinedInput
                required
                {...register("direccion")}
                sx={{ height: { lg: "3rem" } }}
              />
            </FormControl>

            <div className="totals">
              <div className="totals_row">
                <span>Subtotal</span>
                <span>${totals.toFixed(2)}</span>
              </div>
              <div className="totals_row">
                <span>ITBIS</span>
                <span>${itbis.toFixed(2)}</span>
              </div>
              <div className="totals_row">
                <span>Total</span>
                <span>${(totals + itbis).toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              sx={{
                fontWeight: "600",
                width: "100%",
                marginTop: "2rem",
                color: "#198754",
                fontSize: { md: ".6rem", lg: "1rem" },
                ":hover": { color: "#fff", backgroundColor: "#198754" },
              }}
              disabled={products.length === 0}
            >
              Pagar ${(totals + itbis).toFixed(2)}
            </Button>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>
                <IoIosLock />
                Los pagos son seguros y encriptados
              </Typography>
            </Box>
          </form>
        </div>
      </section>
      <Footer />

      {/* Renderizar el diálogo */}
      <ScreenDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-hidden={!isDialogOpen ? "true" : undefined}
        screenSize={true}
        dialogContent={
          <CheckCircleOutlineIcon
            sx={{ fontSize: "14rem", color: "#198754" }}
          />
        }
      />
    </>
  );
}

export default Cart;
