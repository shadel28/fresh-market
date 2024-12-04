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
  Pedidos,
  Productos,
  Proveedores,
  Services,
  Usuario,
} from "./db_models.js";
import {
  clientesSchema,
  empleadosSchema,
  inventarioSchema,
  orderSchema,
  usuarioSchema,
} from "./schemas.js";
import bcrypt from "bcrypt";
import sequelize from "./database.js";

const app = express();

app.use(express.json()); // Middleware para parsear JSON en el cuerpo de la solicitud

app.post("/register-customer/", async (req, res) => {
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

app.post("/register-employee", async (req, res) => {
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
    where: { correo: correo, id_cliente: null },
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

app.post("/login-customer", async (req, res) => {
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

    const cliente = await Usuario.findOne({
      where: { correo: correo, id_empleado: null },
    });
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
          categorias ON productos.id_categoria = categorias.id_categoria
        WHERE
          inventario.cantidad_disponible > 0;
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

app.get("/suppliers/", async (req, res) => {
  try {
    const proveedores = await Proveedores.findAll();

    res.status(200).json(proveedores);
  } catch (error) {
    console.log("Error desde server ", error);
  }
});

app.post("/order/", async (req, res) => {
  try {
    const { id_producto, id_proveedor, cantidad, total } = req.body;
    const { error: orderError } = orderSchema.validate({
      id_producto,
      id_proveedor,
      cantidad,
      total,
    });

    if (orderError) {
      return res.status(400).json({ message: orderError.details[0].message });
    }
    const productoExists = await Productos.findOne({ where: { id_producto } });
    if (!productoExists) {
      return res.status(404).json({ message: "Este producto no existe." });
    }

    const proveedorExists = await Proveedores.findOne({
      where: { id_proveedor },
    });
    if (!proveedorExists) {
      return res
        .status(404)
        .json({ message: "Este proveedor no esta registrado." });
    }
    const order = await Pedidos.create({
      id_proveedor,
      id_producto,
      cantidad,
      total,
    });

    res.status(200).json(order);
  } catch (error) {
    console.error("Error al crear pedido ", error);
  }
});

app.get("/orders/", async (req, res) => {
  try {
    const orders = await sequelize.query(
      `SELECT 
         pedidos.id_producto,
         pedidos.id_proveedor,
         pedidos.cantidad,
         pedidos.total,
         productos.nombre,
         productos.id_categoria,
         productos.imagen_url,
         proveedores.nombre_proveedor,
         inventario.precio_unitario,
         categorias.nombre_categoria
       FROM 
         pedidos
       JOIN 
         productos ON pedidos.id_producto = productos.id_producto
        JOIN
          unidad_medida ON productos.id_unidad_medida = unidad_medida.id_unidad_medida
        JOIN
          categorias ON productos.id_categoria = categorias.id_categoria
        JOIN
          inventario ON productos.id_producto = inventario.id_producto
        JOIN
          proveedores ON pedidos.id_proveedor = proveedores.id_proveedor;
         `,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error consultando pedidos ", error);
  }
});

app.put("/update-quantity/", async (req, res) => {
  try {
    const { id_producto, cantidad_disponible } = req.body;
    const t = await sequelize.transaction();
    const { error: inventarioError } = inventarioSchema.validate({
      id_producto,
      cantidad_disponible,
    });
    console.log(
      "id_producto ",
      id_producto,
      "cantidad_disponible",
      cantidad_disponible
    );

    if (inventarioError) {
      return res
        .status(400)
        .json({ message: inventarioError.details[0].message });
    }
    const productoExists = await Productos.findOne({ where: { id_producto } });
    if (!productoExists) {
      return res.status(404).json({ message: "Este producto no existe." });
    }

    const updateQuantity = await Inventario.increment(
      "cantidad_disponible",
      {
        by: cantidad_disponible,
        where: { id_producto: id_producto },
      },
      { transaction: t }
    );
    const pedido2 = await Pedidos.findOne({
      where: { id_producto: id_producto },
    });
    console.log("pedido2 ", pedido2);
    // crear columna "estado" y actualizar en caso de que se confirme.
    const deletedPedido = await Pedidos.destroy({
      where: { id_producto: id_producto },
    });
    console.log("deletedPedido ", deletedPedido);
    res.status(200).json({ message: "Cantidad actualizada" });
  } catch (error) {
    await t.rollback();
    console.err("Error al actualizar inventario ", error);
  }
});

app.listen(5000, () => {
  console.log("Server inicio en el puerto 5000");
}); // inicar el servidor
