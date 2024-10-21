--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-10-11 22:08:02

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16439)
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16438)
-- Name: categorias_id_categoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categorias_id_categoria_seq OWNER TO postgres;

--
-- TOC entry 4983 (class 0 OID 0)
-- Dependencies: 219
-- Name: categorias_id_categoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;


--
-- TOC entry 218 (class 1259 OID 16432)
-- Name: clientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clientes (
    id_cliente integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    cedula character varying(11) NOT NULL,
    direccion character varying(200) NOT NULL
);


ALTER TABLE public.clientes OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16431)
-- Name: clientes_id_cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.clientes_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.clientes_id_cliente_seq OWNER TO postgres;

--
-- TOC entry 4984 (class 0 OID 0)
-- Dependencies: 217
-- Name: clientes_id_cliente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.clientes_id_cliente_seq OWNED BY public.clientes.id_cliente;


--
-- TOC entry 230 (class 1259 OID 16505)
-- Name: detalle_orden_compra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalle_orden_compra (
    id_orden integer NOT NULL,
    id_producto integer NOT NULL,
    precio_unidad_compra numeric(10,2) NOT NULL,
    cantidad integer NOT NULL
);


ALTER TABLE public.detalle_orden_compra OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16569)
-- Name: detalles_factura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalles_factura (
    id_factura integer NOT NULL,
    id_producto integer NOT NULL,
    cantidad_vendida integer NOT NULL
);


ALTER TABLE public.detalles_factura OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16425)
-- Name: empleados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.empleados (
    id_empleado integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    puesto character varying(100) NOT NULL,
    "contraseña" character varying(255) NOT NULL
);


ALTER TABLE public.empleados OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16424)
-- Name: empleados_id_empleado_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.empleados_id_empleado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.empleados_id_empleado_seq OWNER TO postgres;

--
-- TOC entry 4985 (class 0 OID 0)
-- Dependencies: 215
-- Name: empleados_id_empleado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.empleados_id_empleado_seq OWNED BY public.empleados.id_empleado;


--
-- TOC entry 235 (class 1259 OID 16554)
-- Name: estado_facturas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estado_facturas (
    id_factura integer NOT NULL,
    id_estado integer NOT NULL,
    monto_pendiente numeric(10,2) NOT NULL
);


ALTER TABLE public.estado_facturas OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16548)
-- Name: estados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estados (
    id_estado integer NOT NULL,
    nombre_estado character varying(50) NOT NULL
);


ALTER TABLE public.estados OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16547)
-- Name: estados_id_estado_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.estados_id_estado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.estados_id_estado_seq OWNER TO postgres;

--
-- TOC entry 4986 (class 0 OID 0)
-- Dependencies: 233
-- Name: estados_id_estado_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.estados_id_estado_seq OWNED BY public.estados.id_estado;


--
-- TOC entry 232 (class 1259 OID 16521)
-- Name: facturas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facturas (
    id_factura integer NOT NULL,
    id_cliente integer NOT NULL,
    id_empleado integer NOT NULL,
    fecha timestamp without time zone NOT NULL,
    subtotal_factura numeric(10,2) NOT NULL,
    itbis numeric(10,2) NOT NULL,
    porcentaje_descuento numeric(5,2),
    total_facturado numeric(10,2) NOT NULL
);


ALTER TABLE public.facturas OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16520)
-- Name: facturas_id_factura_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.facturas_id_factura_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.facturas_id_factura_seq OWNER TO postgres;

--
-- TOC entry 4987 (class 0 OID 0)
-- Dependencies: 231
-- Name: facturas_id_factura_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.facturas_id_factura_seq OWNED BY public.facturas.id_factura;


--
-- TOC entry 227 (class 1259 OID 16483)
-- Name: inventario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventario (
    id_producto integer NOT NULL,
    cantidad_disponible integer NOT NULL,
    precio_unitario numeric(10,2) NOT NULL
);


ALTER TABLE public.inventario OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16585)
-- Name: metodo_pago; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.metodo_pago (
    id_metodo_pago integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public.metodo_pago OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16584)
-- Name: metodo_pago_id_metodo_pago_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.metodo_pago_id_metodo_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.metodo_pago_id_metodo_pago_seq OWNER TO postgres;

--
-- TOC entry 4988 (class 0 OID 0)
-- Dependencies: 237
-- Name: metodo_pago_id_metodo_pago_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.metodo_pago_id_metodo_pago_seq OWNED BY public.metodo_pago.id_metodo_pago;


--
-- TOC entry 229 (class 1259 OID 16494)
-- Name: ordenes_compra; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ordenes_compra (
    id_orden integer NOT NULL,
    id_proveedor integer NOT NULL,
    fecha_emision date NOT NULL,
    subtotalfactura numeric(10,2) NOT NULL,
    descuento numeric(10,2) NOT NULL,
    itbis numeric(10,2) NOT NULL,
    total_facturado numeric(10,2) NOT NULL
);


ALTER TABLE public.ordenes_compra OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16493)
-- Name: ordenes_compra_id_orden_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ordenes_compra_id_orden_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ordenes_compra_id_orden_seq OWNER TO postgres;

--
-- TOC entry 4989 (class 0 OID 0)
-- Dependencies: 228
-- Name: ordenes_compra_id_orden_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ordenes_compra_id_orden_seq OWNED BY public.ordenes_compra.id_orden;


--
-- TOC entry 240 (class 1259 OID 16592)
-- Name: pagos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pagos (
    id_pago integer NOT NULL,
    id_factura integer NOT NULL,
    fecha_pago timestamp without time zone NOT NULL,
    monto_pagado numeric(10,2) NOT NULL,
    id_metodo_pago integer NOT NULL
);


ALTER TABLE public.pagos OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16591)
-- Name: pagos_id_pago_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pagos_id_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pagos_id_pago_seq OWNER TO postgres;

--
-- TOC entry 4990 (class 0 OID 0)
-- Dependencies: 239
-- Name: pagos_id_pago_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pagos_id_pago_seq OWNED BY public.pagos.id_pago;


--
-- TOC entry 224 (class 1259 OID 16460)
-- Name: productos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.productos (
    id_producto integer NOT NULL,
    nombre character varying(100) NOT NULL,
    id_unidad_medida integer NOT NULL,
    id_categoria integer NOT NULL
);


ALTER TABLE public.productos OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16459)
-- Name: productos_id_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.productos_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.productos_id_producto_seq OWNER TO postgres;

--
-- TOC entry 4991 (class 0 OID 0)
-- Dependencies: 223
-- Name: productos_id_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;


--
-- TOC entry 226 (class 1259 OID 16477)
-- Name: proveedores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedores (
    id_proveedor integer NOT NULL,
    nombre character varying(100) NOT NULL,
    no_telefono character varying(15) NOT NULL,
    correo character varying(100) NOT NULL
);


ALTER TABLE public.proveedores OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16476)
-- Name: proveedores_id_proveedor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedores_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proveedores_id_proveedor_seq OWNER TO postgres;

--
-- TOC entry 4992 (class 0 OID 0)
-- Dependencies: 225
-- Name: proveedores_id_proveedor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proveedores_id_proveedor_seq OWNED BY public.proveedores.id_proveedor;


--
-- TOC entry 222 (class 1259 OID 16453)
-- Name: unidad_medida; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.unidad_medida (
    id_unidad_medida integer NOT NULL,
    nombre character varying(50) NOT NULL
);


ALTER TABLE public.unidad_medida OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16452)
-- Name: unidad_medida_id_unidad_medida_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.unidad_medida_id_unidad_medida_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.unidad_medida_id_unidad_medida_seq OWNER TO postgres;

--
-- TOC entry 4993 (class 0 OID 0)
-- Dependencies: 221
-- Name: unidad_medida_id_unidad_medida_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.unidad_medida_id_unidad_medida_seq OWNED BY public.unidad_medida.id_unidad_medida;


--
-- TOC entry 4756 (class 2604 OID 16442)
-- Name: categorias id_categoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);


--
-- TOC entry 4755 (class 2604 OID 16435)
-- Name: clientes id_cliente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes ALTER COLUMN id_cliente SET DEFAULT nextval('public.clientes_id_cliente_seq'::regclass);


--
-- TOC entry 4754 (class 2604 OID 16428)
-- Name: empleados id_empleado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleados ALTER COLUMN id_empleado SET DEFAULT nextval('public.empleados_id_empleado_seq'::regclass);


--
-- TOC entry 4762 (class 2604 OID 16551)
-- Name: estados id_estado; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados ALTER COLUMN id_estado SET DEFAULT nextval('public.estados_id_estado_seq'::regclass);


--
-- TOC entry 4761 (class 2604 OID 16524)
-- Name: facturas id_factura; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facturas ALTER COLUMN id_factura SET DEFAULT nextval('public.facturas_id_factura_seq'::regclass);


--
-- TOC entry 4763 (class 2604 OID 16588)
-- Name: metodo_pago id_metodo_pago; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metodo_pago ALTER COLUMN id_metodo_pago SET DEFAULT nextval('public.metodo_pago_id_metodo_pago_seq'::regclass);


--
-- TOC entry 4760 (class 2604 OID 16497)
-- Name: ordenes_compra id_orden; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ordenes_compra ALTER COLUMN id_orden SET DEFAULT nextval('public.ordenes_compra_id_orden_seq'::regclass);


--
-- TOC entry 4764 (class 2604 OID 16595)
-- Name: pagos id_pago; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos ALTER COLUMN id_pago SET DEFAULT nextval('public.pagos_id_pago_seq'::regclass);


--
-- TOC entry 4758 (class 2604 OID 16463)
-- Name: productos id_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq'::regclass);


--
-- TOC entry 4759 (class 2604 OID 16480)
-- Name: proveedores id_proveedor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores ALTER COLUMN id_proveedor SET DEFAULT nextval('public.proveedores_id_proveedor_seq'::regclass);


--
-- TOC entry 4757 (class 2604 OID 16456)
-- Name: unidad_medida id_unidad_medida; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad_medida ALTER COLUMN id_unidad_medida SET DEFAULT nextval('public.unidad_medida_id_unidad_medida_seq'::regclass);


--
-- TOC entry 4957 (class 0 OID 16439)
-- Dependencies: 220
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias (id_categoria, nombre) FROM stdin;
1	Almacén
2	Bebidas
3	Lácteos
4	Carnes & Pescados
5	Frutas & Verduras
6	Panadería
7	Congelados
8	Limpieza
\.


--
-- TOC entry 4955 (class 0 OID 16432)
-- Dependencies: 218
-- Data for Name: clientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clientes (id_cliente, nombre, apellido, cedula, direccion) FROM stdin;
1	Ana	Lopez	10235009857	Av. José Núñez de Cáceres Esq 123
\.


--
-- TOC entry 4967 (class 0 OID 16505)
-- Dependencies: 230
-- Data for Name: detalle_orden_compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalle_orden_compra (id_orden, id_producto, precio_unidad_compra, cantidad) FROM stdin;
\.


--
-- TOC entry 4973 (class 0 OID 16569)
-- Dependencies: 236
-- Data for Name: detalles_factura; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.detalles_factura (id_factura, id_producto, cantidad_vendida) FROM stdin;
\.


--
-- TOC entry 4953 (class 0 OID 16425)
-- Dependencies: 216
-- Data for Name: empleados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.empleados (id_empleado, nombre, apellido, puesto, "contraseña") FROM stdin;
\.


--
-- TOC entry 4972 (class 0 OID 16554)
-- Dependencies: 235
-- Data for Name: estado_facturas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estado_facturas (id_factura, id_estado, monto_pendiente) FROM stdin;
\.


--
-- TOC entry 4971 (class 0 OID 16548)
-- Dependencies: 234
-- Data for Name: estados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estados (id_estado, nombre_estado) FROM stdin;
\.


--
-- TOC entry 4969 (class 0 OID 16521)
-- Dependencies: 232
-- Data for Name: facturas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facturas (id_factura, id_cliente, id_empleado, fecha, subtotal_factura, itbis, porcentaje_descuento, total_facturado) FROM stdin;
\.


--
-- TOC entry 4964 (class 0 OID 16483)
-- Dependencies: 227
-- Data for Name: inventario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.inventario (id_producto, cantidad_disponible, precio_unitario) FROM stdin;
21	50	125.00
22	80	40.50
23	90	55.00
24	50	70.00
25	60	150.00
26	30	110.00
27	20	180.00
28	75	35.00
29	65	25.00
30	100	50.00
31	50	40.00
32	30	90.00
33	25	120.00
34	95	150.00
35	85	60.00
36	40	100.00
37	70	50.00
38	45	200.00
39	90	75.00
40	50	120.00
41	100	45.00
42	75	95.00
43	85	40.00
44	80	10.00
45	70	25.00
46	60	35.00
47	50	55.00
48	80	40.00
49	90	120.00
50	40	130.00
51	70	150.00
52	95	50.00
53	100	30.00
54	50	25.00
55	85	100.00
56	70	65.00
57	50	120.00
58	60	180.00
59	40	200.00
60	70	150.00
61	80	50.00
62	70	100.00
63	50	60.00
64	100	80.00
65	40	150.00
66	80	120.00
67	60	180.00
68	75	110.00
69	45	160.00
70	90	120.00
71	35	250.00
72	60	50.00
73	85	100.00
74	50	120.00
75	40	110.00
76	70	150.00
77	50	200.00
78	90	160.00
79	80	190.00
80	60	210.00
81	100	20.00
82	70	25.00
83	90	35.00
84	80	30.00
85	50	40.00
86	90	15.00
87	100	25.00
88	85	50.00
90	75	35.00
91	50	120.00
92	40	75.00
93	90	40.00
94	80	50.00
95	65	35.00
96	75	100.00
97	80	90.00
98	60	85.00
99	100	30.00
100	50	25.00
101	80	70.00
102	70	110.00
103	90	65.00
104	80	50.00
105	75	120.00
106	85	100.00
107	60	130.00
108	90	95.00
109	70	150.00
110	100	180.00
111	50	60.00
112	75	45.00
113	90	35.00
114	100	40.00
115	85	60.00
116	70	75.00
117	65	80.00
118	55	90.00
119	90	40.00
120	100	55.00
\.


--
-- TOC entry 4975 (class 0 OID 16585)
-- Dependencies: 238
-- Data for Name: metodo_pago; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.metodo_pago (id_metodo_pago, nombre) FROM stdin;
1	Efectivo
2	Tarjeta de débito
3	Tarjeta de crédito
4	PayPal
5	Puntos Fresh Market
\.


--
-- TOC entry 4966 (class 0 OID 16494)
-- Dependencies: 229
-- Data for Name: ordenes_compra; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ordenes_compra (id_orden, id_proveedor, fecha_emision, subtotalfactura, descuento, itbis, total_facturado) FROM stdin;
\.


--
-- TOC entry 4977 (class 0 OID 16592)
-- Dependencies: 240
-- Data for Name: pagos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pagos (id_pago, id_factura, fecha_pago, monto_pagado, id_metodo_pago) FROM stdin;
\.


--
-- TOC entry 4961 (class 0 OID 16460)
-- Dependencies: 224
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.productos (id_producto, nombre, id_unidad_medida, id_categoria) FROM stdin;
21	Harina de trigo	1	1
22	Azúcar	2	1
23	Coca-Cola	3	2
24	Leche entera	3	3
25	Queso cheddar	1	3
26	Pechuga de pollo	1	4
27	Salmón	1	4
28	Manzanas	5	5
29	Plátanos	5	5
30	Pan integral	2	6
31	Croissants	5	6
32	Pizza congelada	2	7
33	Helado de vainilla	2	7
34	Detergente líquido	6	8
35	Jabón en barra	5	8
36	Yogur griego	2	3
37	Zumo de naranja	3	2
38	Pescado congelado	4	4
39	Avena	2	1
40	Cerveza	7	2
41	Harina de maíz	1	1
42	Aceite de oliva	3	1
43	Pasta de trigo	2	1
44	Sal	2	1
45	Arroz	1	1
46	Lentejas	2	1
47	Avena integral	2	1
48	Azúcar morena	2	1
49	Café molido	2	1
50	Vinagre de manzana	3	1
51	Té verde	3	2
52	Jugo de manzana	3	2
53	Agua mineral	3	2
54	Refresco de limón	3	2
55	Bebida energética	3	2
56	Leche de almendra	3	2
57	Batido de proteínas	3	2
58	Cerveza artesanal	7	2
59	Vino tinto	3	2
60	Ron	3	2
61	Leche descremada	3	3
62	Queso mozzarella	1	3
63	Mantequilla	1	3
64	Yogur natural	2	3
65	Leche de cabra	3	3
66	Crema de leche	3	3
67	Queso parmesano	1	3
68	Queso fresco	1	3
69	Queso azul	1	3
70	Helado de chocolate	2	3
71	Filete de res	1	4
72	Atún enlatado	2	4
73	Camarones	1	4
74	Pechuga de pavo	1	4
75	Carne molida	1	4
76	Costillas de cerdo	1	4
77	Salmón ahumado	1	4
78	Bacalao	1	4
79	Pulpo	1	4
80	Chuletas de cordero	1	4
81	Naranjas	5	5
82	Peras	5	5
83	Uvas	5	5
84	Zanahorias	5	5
85	Tomates	5	5
86	Pepinos	5	5
87	Cebollas	5	5
88	Aguacates	5	5
89	Pimientos rojos	5	5
90	Lechuga	5	5
91	Baguette	5	6
92	Pan de centeno	5	6
93	Galletas	5	6
94	Muffins	5	6
95	Donas	5	6
96	Bizcocho	5	6
97	Empanadas	5	6
98	Rosquillas	5	6
99	Tortilla de maíz	5	6
100	Pan de maíz	5	6
101	Papas fritas congeladas	2	7
102	Pollo empanizado congelado	2	7
103	Espinacas congeladas	2	7
104	Frutas congeladas	2	7
105	Helado de fresa	2	7
106	Vegetales congelados	2	7
107	Croquetas de pescado congeladas	2	7
108	Palitos de mozzarella congelados	2	7
109	Camarones congelados	2	7
110	Hamburguesas congeladas	2	7
111	Desinfectante	6	8
112	Limpiavidrios	6	8
113	Cloro	6	8
114	Jabón líquido	6	8
115	Suavizante de telas	6	8
116	Limpiador multiusos	6	8
117	Limpiahornos	6	8
118	Quitamanchas	6	8
119	Detergente en polvo	6	8
120	Limpiador para pisos	6	8
\.


--
-- TOC entry 4963 (class 0 OID 16477)
-- Dependencies: 226
-- Data for Name: proveedores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.proveedores (id_proveedor, nombre, no_telefono, correo) FROM stdin;
1	Carlos Perez Import	8091235698	carlosimport@gmail.com
2	Distribuidora Leon Vasquez	8095707400	info@dilevsa.com
3	Almacenes Continente	8095611616	info@almacenescontinente.com
\.


--
-- TOC entry 4959 (class 0 OID 16453)
-- Dependencies: 222
-- Data for Name: unidad_medida; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.unidad_medida (id_unidad_medida, nombre) FROM stdin;
1	Libra
2	Gramo
3	Litro
4	Kilogramo
5	Unidad
6	Mililitro
7	Onza
\.


--
-- TOC entry 4994 (class 0 OID 0)
-- Dependencies: 219
-- Name: categorias_id_categoria_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 8, true);


--
-- TOC entry 4995 (class 0 OID 0)
-- Dependencies: 217
-- Name: clientes_id_cliente_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.clientes_id_cliente_seq', 1, true);


--
-- TOC entry 4996 (class 0 OID 0)
-- Dependencies: 215
-- Name: empleados_id_empleado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.empleados_id_empleado_seq', 1, false);


--
-- TOC entry 4997 (class 0 OID 0)
-- Dependencies: 233
-- Name: estados_id_estado_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.estados_id_estado_seq', 1, false);


--
-- TOC entry 4998 (class 0 OID 0)
-- Dependencies: 231
-- Name: facturas_id_factura_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.facturas_id_factura_seq', 1, false);


--
-- TOC entry 4999 (class 0 OID 0)
-- Dependencies: 237
-- Name: metodo_pago_id_metodo_pago_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.metodo_pago_id_metodo_pago_seq', 5, true);


--
-- TOC entry 5000 (class 0 OID 0)
-- Dependencies: 228
-- Name: ordenes_compra_id_orden_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ordenes_compra_id_orden_seq', 1, false);


--
-- TOC entry 5001 (class 0 OID 0)
-- Dependencies: 239
-- Name: pagos_id_pago_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pagos_id_pago_seq', 1, false);


--
-- TOC entry 5002 (class 0 OID 0)
-- Dependencies: 223
-- Name: productos_id_producto_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.productos_id_producto_seq', 120, true);


--
-- TOC entry 5003 (class 0 OID 0)
-- Dependencies: 225
-- Name: proveedores_id_proveedor_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.proveedores_id_proveedor_seq', 3, true);


--
-- TOC entry 5004 (class 0 OID 0)
-- Dependencies: 221
-- Name: unidad_medida_id_unidad_medida_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.unidad_medida_id_unidad_medida_seq', 7, true);


--
-- TOC entry 4770 (class 2606 OID 16444)
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);


--
-- TOC entry 4768 (class 2606 OID 16437)
-- Name: clientes clientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente);


--
-- TOC entry 4782 (class 2606 OID 16509)
-- Name: detalle_orden_compra detalle_orden_compra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_pkey PRIMARY KEY (id_orden, id_producto);


--
-- TOC entry 4790 (class 2606 OID 16573)
-- Name: detalles_factura detalles_factura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_pkey PRIMARY KEY (id_factura, id_producto);


--
-- TOC entry 4766 (class 2606 OID 16430)
-- Name: empleados empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id_empleado);


--
-- TOC entry 4788 (class 2606 OID 16558)
-- Name: estado_facturas estado_facturas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_pkey PRIMARY KEY (id_factura, id_estado);


--
-- TOC entry 4786 (class 2606 OID 16553)
-- Name: estados estados_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estados
    ADD CONSTRAINT estados_pkey PRIMARY KEY (id_estado);


--
-- TOC entry 4784 (class 2606 OID 16526)
-- Name: facturas facturas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_pkey PRIMARY KEY (id_factura);


--
-- TOC entry 4778 (class 2606 OID 16487)
-- Name: inventario inventario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_pkey PRIMARY KEY (id_producto);


--
-- TOC entry 4792 (class 2606 OID 16590)
-- Name: metodo_pago metodo_pago_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.metodo_pago
    ADD CONSTRAINT metodo_pago_pkey PRIMARY KEY (id_metodo_pago);


--
-- TOC entry 4780 (class 2606 OID 16499)
-- Name: ordenes_compra ordenes_compra_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ordenes_compra
    ADD CONSTRAINT ordenes_compra_pkey PRIMARY KEY (id_orden);


--
-- TOC entry 4794 (class 2606 OID 16597)
-- Name: pagos pagos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_pkey PRIMARY KEY (id_pago);


--
-- TOC entry 4774 (class 2606 OID 16465)
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_producto);


--
-- TOC entry 4776 (class 2606 OID 16482)
-- Name: proveedores proveedores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (id_proveedor);


--
-- TOC entry 4772 (class 2606 OID 16458)
-- Name: unidad_medida unidad_medida_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.unidad_medida
    ADD CONSTRAINT unidad_medida_pkey PRIMARY KEY (id_unidad_medida);


--
-- TOC entry 4799 (class 2606 OID 16510)
-- Name: detalle_orden_compra detalle_orden_compra_id_orden_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_id_orden_fkey FOREIGN KEY (id_orden) REFERENCES public.ordenes_compra(id_orden);


--
-- TOC entry 4800 (class 2606 OID 16515)
-- Name: detalle_orden_compra detalle_orden_compra_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);


--
-- TOC entry 4805 (class 2606 OID 16574)
-- Name: detalles_factura detalles_factura_id_factura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);


--
-- TOC entry 4806 (class 2606 OID 16579)
-- Name: detalles_factura detalles_factura_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);


--
-- TOC entry 4803 (class 2606 OID 16564)
-- Name: estado_facturas estado_facturas_id_estado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_id_estado_fkey FOREIGN KEY (id_estado) REFERENCES public.estados(id_estado);


--
-- TOC entry 4804 (class 2606 OID 16559)
-- Name: estado_facturas estado_facturas_id_factura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);


--
-- TOC entry 4801 (class 2606 OID 16527)
-- Name: facturas facturas_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.clientes(id_cliente);


--
-- TOC entry 4802 (class 2606 OID 16532)
-- Name: facturas facturas_id_empleado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_id_empleado_fkey FOREIGN KEY (id_empleado) REFERENCES public.empleados(id_empleado);


--
-- TOC entry 4797 (class 2606 OID 16488)
-- Name: inventario inventario_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);


--
-- TOC entry 4798 (class 2606 OID 16500)
-- Name: ordenes_compra ordenes_compra_id_proveedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ordenes_compra
    ADD CONSTRAINT ordenes_compra_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedores(id_proveedor);


--
-- TOC entry 4807 (class 2606 OID 16598)
-- Name: pagos pagos_id_factura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);


--
-- TOC entry 4808 (class 2606 OID 16603)
-- Name: pagos pagos_id_metodo_pago_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_metodo_pago_fkey FOREIGN KEY (id_metodo_pago) REFERENCES public.metodo_pago(id_metodo_pago);


--
-- TOC entry 4795 (class 2606 OID 16471)
-- Name: productos productos_id_categoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria);


--
-- TOC entry 4796 (class 2606 OID 16466)
-- Name: productos productos_id_unidad_medida_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_id_unidad_medida_fkey FOREIGN KEY (id_unidad_medida) REFERENCES public.unidad_medida(id_unidad_medida);


-- Completed on 2024-10-11 22:08:02

--
-- PostgreSQL database dump complete
--

