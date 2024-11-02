import React from "react";
import {
  FormControl,
  FormLabel,
  TextField,
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

import { useLoginCustomer } from "../../api/FreshMarket";
import { useForm } from "react-hook-form";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit } = useForm();

  const { mutate: loginCustomer, isLoading, error } = useLoginCustomer();

  const submitCredentials = (credentials) => {
    loginCustomer({
      customerCredentials: credentials,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div> Error iniciando sesion {error.message}.</div>;

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
          Bienvenido de vuelta
        </Typography>
        <Typography fontSize="1rem" fontWeight="400">
          Accede a tu cuenta personal para comprar tus productos en el mejor
          mercado del país.
        </Typography>
        <form className="form" onSubmit={handleSubmit(submitCredentials)}>
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
              required
              {...register("correo")}
              sx={{ height: { lg: "3rem" } }}
            />
          </FormControl>

          <FormControl variant="outlined">
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
              Iniciar Sesión
            </Button>
          </Box>
        </form>

        <Divider>O</Divider>
        <div className="no-account">
          <Typography sx={{ fontSize: { md: ".9rem", lg: "1.2rem" } }}>
            ¿No tiene una cuenta?
          </Typography>
          <Link to="/register">
            <Button
              sx={{
                color: "#000",
                fontWeight: "600",
                color: "#198754",
                fontSize: { md: ".6rem", lg: "1rem" },
                ":hover": { color: "#fff", backgroundColor: "#198754" },
              }}
            >
              Crear Cuenta
            </Button>
          </Link>
        </div>
      </Box>
      <div className="column"></div>
    </section>
  );
}

export default Login;
