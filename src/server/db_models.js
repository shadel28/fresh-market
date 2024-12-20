import { DataTypes } from "sequelize";
import sequelize from "./database.js";
// Simular las tablas y columnas de la DB

export const Categorias = sequelize.define(
  "categorias",
  {
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export const Clientes = sequelize.define(
  "clientes",
  {
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    cedula: { type: DataTypes.STRING(11), allowNull: false },
    direccion: { type: DataTypes.STRING(200), allowNull: false },
  },
  { timestamps: false }
);

export const Empleados = sequelize.define(
  "empleados",
  {
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    apellido: { type: DataTypes.STRING(100), allowNull: false },
    puesto: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export const DetallesFactura = sequelize.define(
  "detalles_factura",
  {
    id_factura: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cantidad_vendida: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

export const Facturas = sequelize.define(
  "facturas",
  {
    id_factura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_cliente: { type: DataTypes.INTEGER, allowNull: false },
    id_empleado: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATE(), allowNull: false },
    subtotal_factura: { type: DataTypes.DOUBLE, allowNull: false },
    itbis: { type: DataTypes.DOUBLE, allowNull: false },
    porcentaje_descuento: { type: DataTypes.DOUBLE, allowNull: false },
    total_facturado: { type: DataTypes.DOUBLE, allowNull: false },
  },
  { timestamps: false }
);

export const Inventario = sequelize.define(
  "inventario",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cantidad_disponible: { type: DataTypes.INTEGER, allowNull: false },
    precio_unitario: { type: DataTypes.DOUBLE, allowNull: false },
  },
  { timestamps: false }
);

export const MetodoPago = sequelize.define(
  "metodo_pago",
  {
    id_metodo_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export const Pagos = sequelize.define(
  "pagos",
  {
    id_pago: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_factura: { type: DataTypes.INTEGER, allowNull: false },
    fecha_pago: { type: DataTypes.DATE, allowNull: false },
    monto_pagado: { type: DataTypes.DOUBLE, allowNull: false },
    id_metodo_pago: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

export const Productos = sequelize.define(
  "productos",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    id_unidad_medida: { type: DataTypes.INTEGER, allowNull: false },
    id_categoria: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

export const Proveedores = sequelize.define(
  "proveedores",
  {
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_proveedor: { type: DataTypes.STRING(100), allowNull: false },
    no_telefono: { type: DataTypes.STRING(100), allowNull: false },
    correo_proveedor: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export const UnidadMedida = sequelize.define(
  "unidad_medida",
  {
    id_unidad_medida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
  },
  { timestamps: false }
);

export const Usuario = sequelize.define(
  "usuarios",
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Clientes,
        key: "id_cliente",
      },
      onDelete: "SET NULL",
    },
    id_empleado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Empleados,
        key: "id_empleado",
      },
      onDelete: "SET NULL",
    },
  },
  { timestamps: false }
);

export const Pedidos = sequelize.define(
  "pedidos",
  {
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.DOUBLE, allowNull: false },
  },
  { timestamps: false }
);

Clientes.hasOne(Usuario, { foreignKey: "id_cliente" });
Usuario.belongsTo(Clientes, { foreignKey: "id_cliente" });

Empleados.hasOne(Usuario, { foreignKey: "id_empleado" });
Usuario.belongsTo(Empleados, { foreignKey: "id_empleado" });

Productos.hasOne(Inventario, { foreignKey: "id_producto" });
Inventario.belongsTo(Productos, { foreignKey: "id_producto" });

Facturas.belongsTo(Clientes, { foreignKey: "id_cliente" });
Clientes.hasOne(Facturas, { foreignKey: "id_cliente" });

Facturas.belongsTo(Empleados, { foreignKey: "id_empleado" });
Empleados.hasOne(Facturas, { foreignKey: "id_empleado" });

DetallesFactura.belongsTo(Facturas, { foreignKey: "id_factura" });
Facturas.hasOne(DetallesFactura, { foreignKey: "id_factura" });

DetallesFactura.belongsTo(Productos, { foreignKey: "id_producto" });
Productos.hasOne(DetallesFactura, { foreignKey: "id_producto" });

Pagos.belongsTo(Facturas, { foreignKey: "id_factura" });
Facturas.belongsTo(Pagos, { foreignKey: "id_factura" });

Pagos.belongsTo(MetodoPago, { foreignKey: "id_metodo_pago" });
MetodoPago.belongsTo(Pagos, { foreignKey: "id_metodo_pago" });

Categorias.belongsTo(Productos, { foreignKey: "id_categoria" });
Productos.belongsTo(Categorias, { foreignKey: "id_categoria" });

UnidadMedida.belongsTo(Productos, { foreignKey: "id_unidad_medida" });
Productos.belongsTo(UnidadMedida, { foreignKey: "id_unidad_medida" });

Pedidos.hasOne(Proveedores, { foreignKey: "id_proveedor" });
Proveedores.belongsTo(Pedidos, { foreignKey: "id_proveedor" });

Pedidos.hasOne(Productos, { foreignKey: "id_producto" });
Productos.belongsTo(Pedidos, { foreignKey: "id_producto" });
