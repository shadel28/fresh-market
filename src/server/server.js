import express from "express";
import { Clientes, Services, Usuario } from "./db_models.js";
import { clientesSchema, usuarioSchema } from "./schemas.js";
import bcrypt from "bcrypt";
import axios from "axios";

const app = express();

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de la solicitud

const validateRequest = async (service_api_key, nombre_service) => {
  const authenticated_headers = await Services.findOne({
    where: { service_api_key: service_api_key, nombre_service: nombre_service },
  });

  if (authenticated_headers) {
    return true;
  } else {
    return false;
  }
};

app.post("/server-register-customer", async (req, res) => {
  const nombre_service = req.get("nombre_service");
  const service_api_key = req.get("service_api_key");

  if (!nombre_service || !service_api_key) {
    return res.status(400).json({
      message:
        "Debe colocar los headers para request. Leer README.md para más información.",
    });
  }

  if (!(await validateRequest(service_api_key, nombre_service))) {
    return res.status(401).json({ message: "Request Invalido" });
  }

  const { nombre, apellido, cedula, direccion, correo, clave } = req.body;
  const saltRounds = 10;

  // Validación de cliente
  const { error: clienteError } = clientesSchema.validate({
    nombre,
    apellido,
    cedula,
    direccion,
  });
  if (clienteError) {
    return res.status(400).json({ message: clienteError.details[0].message });
  }

  // Validación de usuario
  const { error: usuarioError } = usuarioSchema.validate({ correo, clave });
  if (usuarioError) {
    return res.status(400).json({ message: usuarioError.details[0].message });
  }

  const correoAlreadyExists = await Usuario.findOne({
    where: { correo },
  });

  if (correoAlreadyExists) {
    return res.status(400).json({ message: "Este correo ya está registrado" });
  }

  try {
    const hashedPassword = await bcrypt.hash(clave, saltRounds); // Hashear la contraseña

    const nuevoCliente = await Clientes.create({
      nombre,
      apellido,
      cedula,
      direccion,
    });

    const nuevoUsuario = await Usuario.create({
      id_cliente: nuevoCliente.id_cliente,
      correo,
      clave: hashedPassword,
    });

    return res
      .status(201)
      .json({ cliente: nuevoCliente, usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar el cliente" });
  }
});

app.post("/server-login-customer", async (req, res) => {
  try {
    const nombre_service = req.get("nombre_service");
    const service_api_key = req.get("service_api_key");
    console.log("deentro de mi request ", nombre_service);
    if (!nombre_service || !service_api_key) {
      return res.status(400).json({
        message:
          "Debe colocar los headers para request. Leer README.md para más información.",
      });
    }

    if (!(await validateRequest(service_api_key, nombre_service))) {
      return res.status(401).json({ message: "Request Invalido" });
    }

    const { correo, clave } = req.body;
    if (!correo || !clave) {
      return res
        .status(400)
        .json({ message: "Correo y clave son requeridos." });
    }

    const { error } = usuarioSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const cliente = await Usuario.findOne({ where: { correo } }); // deberiamos filtrar tambien por si es empleado o cliente pero sera para despues ig
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(clave, cliente.clave);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Las credenciales son incorrectas" });
    }

    return res.status(200).json("Sesion inicada");
  } catch (err) {
    console.error("aqui ", err);
    res.status(500).json({ message: "Error al procesar el login" });
  }
});

// Ruta del frontend
app.post("/login-customer", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/server-login-customer",
      req.body,
      {
        headers: {
          service_api_key: process.env.API_KEY,
          nombre_service: process.env.SERVICE_NAME,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log("el error aqui ", error);
    res
      .status(500)
      .json({ error: "Error en la solicitud para iniciar sesion" });
  }
});

app.post("/register-customer", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/server-register-customer",
      req.body,
      {
        headers: {
          service_api_key: process.env.API_KEY,
          nombre_service: process.env.SERVICE_NAME,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log("el error aqui ", error);
    res.status(500).json({ error: "Error en la solicitud para crear cliente" });
  }
});

app.listen(5000, () => {
  console.log("Server inicio en el puerto 5000");
}); // inicar el servidor
