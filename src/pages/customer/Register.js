import React from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Divider,
  Typography,
  Box,
} from "@mui/material";
import "./customer.css";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useForm } from "react-hook-form";
import { useRegisterCustomer } from "../../api/FreshMarket";

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const { register, handleSubmit } = useForm();

  const { mutate: registerCustomer, isLoading, error } = useRegisterCustomer();

  const submitNewCustomer = (newCustomer) => {
    registerCustomer({ customerData: newCustomer });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error al registrar cliente {error.nessage}.</div>;
  return (
    <section className="customer__section">
      <Box
        sx={{
          width: "50%",
          height: "100vh",
          display: "flex",
          alignItems: " left",
          justifyContent: "flex-start",
          flexDirection: "column",
          textAlign: "left",
          padding: "4rem 6rem",
        }}
      >
        <Typography fontSize="1.7rem" fontWeight="700">
          Crea tu cuenta hoy mismo
        </Typography>
        <Typography fontSize="1rem" fontWeight="400">
          Descubre nuevas opciones de productos frescos y con gran variedad al
          crear tu cuenta en Fresh Market.
        </Typography>
        <form className="form" onSubmit={handleSubmit(submitNewCustomer)}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ width: "45%" }}>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Nombre
              </FormLabel>
              <OutlinedInput
                type="text"
                variant="outlined"
                {...register("nombre")}
              />
            </FormControl>

            <FormControl sx={{ width: "45%" }}>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Apellido
              </FormLabel>
              <OutlinedInput
                type="text"
                variant="outlined"
                {...register("apellido")}
              />
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl sx={{ width: "45%" }} variant="outlined">
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Contraseña
              </FormLabel>
              <OutlinedInput
                {...register("clave")}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ width: "45%" }}>
              <FormLabel
                sx={{
                  fontWeight: "700",
                  color: "#000",
                  margin: " 2rem 0 .4rem 0",
                }}
              >
                Cedula
              </FormLabel>
              <OutlinedInput
                type="text"
                variant="outlined"
                {...register("cedula")}
              />
            </FormControl>
          </Box>

          <FormControl>
            <FormLabel
              sx={{
                fontWeight: "700",
                color: "#000",
                margin: " 2rem 0 .4rem 0",
              }}
            >
              Dirección
            </FormLabel>
            <OutlinedInput
              type="text"
              variant="outlined"
              {...register("direccion")}
            />
          </FormControl>
          <FormControl>
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
              type="text"
              variant="outlined"
              {...register("correo")}
            />
          </FormControl>

          <Box>
            <Button
              type="submit"
              sx={{
                color: "#fff",
                backgroundColor: "#198754",
                width: "100%",
                padding: ".8rem",
                marginTop: "2rem",
              }}
            >
              Crear Cuenta
            </Button>
          </Box>
        </form>

        <Divider>O</Divider>
        <div className="no-account">
          <Typography sx={{ fontSize: { md: ".9rem", lg: "1.2rem" } }}>
            ¿Tiene una cuenta?
          </Typography>
          <Link to="/login">
            <Button
              sx={{
                color: "#000",
                fontWeight: "600",
                fontSize: { md: ".6rem", lg: "1rem" },
                ":hover": { color: "#fff", backgroundColor: "#198754" },
              }}
            >
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </Box>
      <div className="column"></div>
    </section>
  );
}

export default Register;
