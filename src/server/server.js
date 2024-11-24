import express from "express";
import {
  Clientes,
  DetalleOrdenCompra,
  DetallesFactura,
  Empleados,
  Facturas,
  Inventario,
  OrdenesCompra,
  Pagos,
  Services,
  Usuario,
} from "./db_models.js";
import { clientesSchema, empleadosSchema, usuarioSchema } from "./schemas.js";
import bcrypt from "bcrypt";
import axios from "axios";
import sequelize from "./database.js";

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
      .status(200)
      .json({ cliente: nuevoCliente, usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar el cliente" });
  }
});

app.post("/server-register-employee", async (req, res) => {
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

  const { nombre, apellido, puesto, correo, clave } = req.body;
  const saltRounds = 10;

  // Validación de cliente
  const { error: empleadoError } = empleadosSchema.validate({
    nombre,
    apellido,
    puesto,
  });
  if (empleadoError) {
    return res.status(400).json({ message: empleadoError.details[0].message });
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

    const nuevoEmpleado = await Empleados.create({
      nombre,
      apellido,
      puesto,
    });

    const nuevoUsuario = await Usuario.create({
      id_empleado: nuevoEmpleado.id_empleado,
      correo,
      clave: hashedPassword,
    });

    return res
      .status(200)
      .json({ empleado: nuevoEmpleado, usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al registrar el cliente" });
  }
});

app.post("/server-login-customer", async (req, res) => {
  try {
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

    const cliente = await Usuario.findOne({ where: { correo } });
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(clave, cliente.clave);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Las credenciales son incorrectas" });
    }

    return res.status(200).json(cliente.id_cliente);
  } catch (err) {
    console.error("Error al iniciar sesion (cliente) ", err);
    res.status(500).json({ message: "Error al iniciar sesion (cliente) " });
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
    console.log("Error en la solicitud para iniciar sesion ", error);
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
    console.log("Error en la solicitud para crear cliente ", error);
    res.status(400).json({ error: "Error en la solicitud para crear cliente" });
  }
});

// EMPLOYEE

app.post("/login-employee", async (req, res) => {
  try {
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

    const empleado = await Usuario.findOne({ where: { correo } });
    if (!empleado) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(clave, empleado.clave);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Las credenciales son incorrectas" });
    }

    return res.status(200).json(empleado.id_empleado);
  } catch (err) {
    console.error("Error al iniciar sesion (empleado) ", err);
    res.status(500).json({ message: "Error al iniciar sesion (empleado)" });
  }
});

// PRODUCTS ROUTES

app.post("/payment", async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { id_cliente, id_metodo_pago, subtotal, total, itbis, productos } =
      req.body;

    const timestamp = new Date().toISOString().slice(0, -1);

    const factura = await Facturas.create(
      {
        id_cliente,
        id_empleado: 1, // hardcoded por ahora
        fecha: timestamp,
        subtotal_factura: subtotal,
        itbis,
        porcentaje_descuento: 0,
        total_facturado: total,
      },
      { transaction: t }
    );

    const generatePayment = await Pagos.create(
      {
        id_factura: factura.id_factura,
        fecha_pago: timestamp,
        monto_pagado: total,
        id_metodo_pago,
      },
      { transaction: t }
    );

    const orden = await OrdenesCompra.create(
      {
        id_proveedor: 1, // hardcoded por ahora
        fecha_emision: timestamp,
        subtotalfactura: subtotal,
        descuento: 0,
        itbis,
        total_facturado: total,
      },
      { transaction: t }
    );

    // Insertar múltiples productos y actualizar inventario
    for (const producto of productos) {
      const existingProduct = await Inventario.findOne(
        {
          where: { id_producto: producto.id_producto },
        },
        { transaction: t }
      );

      if (!existingProduct || existingProduct.cantidad_disponible <= 0) {
        await t.rollback(); // Revertir la transacción si no hay stock
        return res.status(400).json({
          message: "out of stock",
        });
      } else {
        await DetalleOrdenCompra.create(
          {
            id_orden: orden.id_orden,
            id_producto: producto.id_producto,
            precio_unidad_compra: producto.precio_unitario,
            cantidad: producto.cantidad,
          },
          { transaction: t }
        );

        await DetallesFactura.create(
          {
            id_factura: factura.id_factura,
            id_producto: producto.id_producto,
            cantidad_vendida: producto.cantidad,
          },
          { transaction: t }
        );

        await Inventario.decrement(
          "cantidad_disponible",
          {
            by: producto.cantidad,
            where: { id_producto: producto.id_producto },
          },
          { transaction: t }
        );
      }
    }

    // Confirmar la transacción si todo va bien
    await t.commit();
    res.status(200).json({ message: "Operación completada" });
  } catch (error) {
    await t.rollback(); // Revertir la transacción en caso de error
    console.log("Error creando factura:", error);
    res.status(400).json("Error creando factura");
  }
});

app.get("/products/", async (req, res) => {
  try {
    const productosInventario = await sequelize.query(
      `SELECT 
         inventario.id_producto,
         inventario.cantidad_disponible,
         inventario.precio_unitario,
         productos.nombre,
         productos.id_unidad_medida,
         productos.id_categoria,
         productos.imagen_url,
         unidad_medida.nombre_unidad,
         categorias.nombre_categoria
       FROM 
         inventario
       JOIN 
         productos ON inventario.id_producto = productos.id_producto
        JOIN
          unidad_medida ON productos.id_unidad_medida = unidad_medida.id_unidad_medida
        JOIN
          categorias ON productos.id_categoria = categorias.id_categoria;
         `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json(productosInventario);
  } catch (error) {
    console.error("Error al traer productos e inventario", error);
    res.status(500).json({ error: "Error al traer los datos" });
  }
});

app.listen(5000, () => {
  console.log("Server inicio en el puerto 5000");
}); // inicar el servidor
