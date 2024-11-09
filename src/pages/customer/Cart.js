// Esta es la pagina de carrito
import Header from "../../components/layaouts/Header/Header";
import { React, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import "./customer.css";
import { MdShoppingBag } from "react-icons/md";
import { TbArrowNarrowLeft } from "react-icons/tb";
// import Form from "react-bootstrap/Form";
import { IoIosLock } from "react-icons/io";
// import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../../components/layaouts/Footer/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormLabel, Button, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";

function Cart() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      metodo: "",
    },
  });

  const handleSelectedPaymendMethod = (data) => {
    console.log("Datos enviados: ", data);
  };

  const handleChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
    console.log("selectedPaymentMethod ", selectedPaymentMethod);
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
            <span>3 Productos</span>
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
            <CardProduct />
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
          {/* <Form onSubmit={handleSubmit(handleSelectedPaymendMethod())}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="form__label">Correo</Form.Label>
              <Form.Control type="email" size="sm" />

              <Form.Label className="form__label">Método de pago</Form.Label>
              <Form.Select size="sm" {...register("opcioness")}>
                <option value="efectivo" {...register("efectivo")}>
                  Efectivo
                </option>
                <option value="debito">Tarjeta de débito</option>
                <option value="credito">Tarjeta de crédito</option>
                <option value="paypal" {...register("paypal")}>
                  PayPal
                </option>
                <option value="punto">Puntos FreshMarket</option>
              </Form.Select>

              <Form.Label className="form__label">
                Detalle de tarjeta
              </Form.Label>
              <Form.Control type="text" size="sm" />

              <Form.Label className="form__label">
                Nombre de la tarjeta
              </Form.Label>
              <Form.Control type="text" size="sm" />

              <Form.Label className="form__label">
                Direccion de envio
              </Form.Label>
              <Form.Select size="sm">
                <option>Santo Domingo</option>
                <option>Valverde</option>
                <option>La Vega</option>
              </Form.Select>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="First name"
                  size="sm"
                  placeholder="No."
                />
                <Form.Control
                  aria-label="Last name"
                  size="sm"
                  placeholder="Direccion"
                />
              </InputGroup>

              <div className="totals">
                <div className="totals_row">
                  <span>Subtotal</span>
                  <span>$70.00</span>
                </div>
                <div className="totals_row">
                  <span>ITBIS</span>
                  <span>$12.6</span>
                </div>
                <div className="totals_row">
                  <span>Total</span>
                  <span>$82.6</span>
                </div>
              </div>
            </Form.Group>
            <button style={{ width: "100%" }} type="submit">
              Pagar $82.6
            </button>
          </Form> */}

          <form onSubmit={handleSubmit(handleSelectedPaymendMethod)}>
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
                <MenuItem value="efectivo">Efectivo</MenuItem>
                <MenuItem value="debito">Tarjeta de débito</MenuItem>
                <MenuItem value="credito">Tarjeta de crédito</MenuItem>
                <MenuItem value="paypal">Paypal</MenuItem>
                <MenuItem value="puntos">Puntos FreshMarket</MenuItem>
              </Select>
            </FormControl>

            {/* Renderizado condicional del input según el método de pago */}
            {selectedPaymentMethod === "debito" && (
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

            {selectedPaymentMethod === "credito" && (
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
                {...register("correo")}
                sx={{ height: { lg: "3rem" } }}
              />
            </FormControl>

            <Button
              type="submit"
              sx={{
                color: "#000",
                fontWeight: "600",
                width: "100%",
                marginTop: "2rem",
                color: "#198754",
                fontSize: { md: ".6rem", lg: "1rem" },
                ":hover": { color: "#fff", backgroundColor: "#198754" },
              }}
            >
              Pagar 82.15
            </Button>
            {/* <Form.Text id="pagos" muted>
            <IoIosLock />
            
          </Form.Text> */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography>
                <IoIosLock />
                Los pagos son securos y encriptados
              </Typography>
            </Box>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
