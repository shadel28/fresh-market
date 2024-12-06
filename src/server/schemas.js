import Joi from "joi";

export const categoriasSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
});

export const clientesSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
  apellido: Joi.string().max(100).required(),
  cedula: Joi.string().min(3).max(11).required(),
  direccion: Joi.string().min(3).max(30).required(),
});

export const empleadosSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
  apellido: Joi.string().min(3).max(30).required(),
  puesto: Joi.string().min(3).max(30).required(),
});

export const detallesFacturaSchema = Joi.object({
  id_factura: Joi.number().integer().required(),
  id_producto: Joi.number().integer().required(),
  cantidad_vendida: Joi.number().integer().required(),
});

export const facturassSchema = Joi.object({
  id_factura: Joi.number().integer().required(),
  id_cliente: Joi.number().integer().required(),
  id_empleado: Joi.number().integer().required(),
  fecha: Joi.date().required(),
  subtotal_factura: Joi.number().precision(2).positive().required(),
  itbis: Joi.number().precision(2).positive().required(),
  porcentaje_descuento: Joi.number().precision(2).positive().required(),
  total_facturado: Joi.number().precision(2).positive().required(),
});

export const inventarioSchema = Joi.object({
  id_producto: Joi.number().integer().required(),
  cantidad_disponible: Joi.number().integer().required(),
  precio_unitario: Joi.number()
    .precision(2)
    .positive()
    .when("cantidad_disponible", {
      is: Joi.exist(),
      then: Joi.optional(),
    }),
});

export const metodoPagoSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
});

export const pagosSchema = Joi.object({
  id_factura: Joi.number().integer().required(),
  id_metodo_pago: Joi.number().integer().required(),
  fecha_pago: Joi.date().required(),
  monto_pagado: Joi.number().precision(2).positive().required(),
});

export const productosSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
  id_unidad_medida: Joi.number().integer().required(),
  id_categoria: Joi.number().integer().required().required(),
});

export const proveedoresSchema = Joi.object({
  nombre_proveedor: Joi.string().min(3).max(100).required(),
  no_telefono: Joi.string().min(3).max(100).required(),
  correo_proveedor: Joi.string().min(3).max(100).required(),
});

export const unidadMedidaSchema = Joi.object({
  nombre: Joi.string().min(3).max(100).required(),
});

export const usuarioSchema = Joi.object({
  id_cliente: Joi.number().integer(),
  id_empleado: Joi.number().integer(),
  correo: Joi.string().min(3).max(30).required(),
  clave: Joi.string().required(),
});

export const orderSchema = Joi.object({
  id_proveedor: Joi.number().integer(),
  id_producto: Joi.number().integer(),
  cantidad: Joi.number().precision(2).positive().required(),
  total: Joi.number().precision(2).positive().required(),
});
