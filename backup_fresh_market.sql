PGDMP  4                	    |            fresh_market    16.4    16.4 k    t           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            u           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            v           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            w           1262    16395    fresh_market    DATABASE     �   CREATE DATABASE fresh_market WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE fresh_market;
                postgres    false            �            1259    16439 
   categorias    TABLE     r   CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    nombre character varying(100) NOT NULL
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    16438    categorias_id_categoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.categorias_id_categoria_seq;
       public          postgres    false    220            x           0    0    categorias_id_categoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categorias_id_categoria_seq OWNED BY public.categorias.id_categoria;
          public          postgres    false    219            �            1259    16432    clientes    TABLE     �   CREATE TABLE public.clientes (
    id_cliente integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    cedula character varying(11) NOT NULL,
    direccion character varying(200) NOT NULL
);
    DROP TABLE public.clientes;
       public         heap    postgres    false            �            1259    16431    clientes_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.clientes_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.clientes_id_cliente_seq;
       public          postgres    false    218            y           0    0    clientes_id_cliente_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.clientes_id_cliente_seq OWNED BY public.clientes.id_cliente;
          public          postgres    false    217            �            1259    16505    detalle_orden_compra    TABLE     �   CREATE TABLE public.detalle_orden_compra (
    id_orden integer NOT NULL,
    id_producto integer NOT NULL,
    precio_unidad_compra numeric(10,2) NOT NULL,
    cantidad integer NOT NULL
);
 (   DROP TABLE public.detalle_orden_compra;
       public         heap    postgres    false            �            1259    16569    detalles_factura    TABLE     �   CREATE TABLE public.detalles_factura (
    id_factura integer NOT NULL,
    id_producto integer NOT NULL,
    cantidad_vendida integer NOT NULL
);
 $   DROP TABLE public.detalles_factura;
       public         heap    postgres    false            �            1259    16425 	   empleados    TABLE     �   CREATE TABLE public.empleados (
    id_empleado integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    puesto character varying(100) NOT NULL,
    "contraseña" character varying(255) NOT NULL
);
    DROP TABLE public.empleados;
       public         heap    postgres    false            �            1259    16424    empleados_id_empleado_seq    SEQUENCE     �   CREATE SEQUENCE public.empleados_id_empleado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.empleados_id_empleado_seq;
       public          postgres    false    216            z           0    0    empleados_id_empleado_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.empleados_id_empleado_seq OWNED BY public.empleados.id_empleado;
          public          postgres    false    215            �            1259    16554    estado_facturas    TABLE     �   CREATE TABLE public.estado_facturas (
    id_factura integer NOT NULL,
    id_estado integer NOT NULL,
    monto_pendiente numeric(10,2) NOT NULL
);
 #   DROP TABLE public.estado_facturas;
       public         heap    postgres    false            �            1259    16548    estados    TABLE     r   CREATE TABLE public.estados (
    id_estado integer NOT NULL,
    nombre_estado character varying(50) NOT NULL
);
    DROP TABLE public.estados;
       public         heap    postgres    false            �            1259    16547    estados_id_estado_seq    SEQUENCE     �   CREATE SEQUENCE public.estados_id_estado_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.estados_id_estado_seq;
       public          postgres    false    234            {           0    0    estados_id_estado_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.estados_id_estado_seq OWNED BY public.estados.id_estado;
          public          postgres    false    233            �            1259    16521    facturas    TABLE     W  CREATE TABLE public.facturas (
    id_factura integer NOT NULL,
    id_cliente integer NOT NULL,
    id_empleado integer NOT NULL,
    fecha timestamp without time zone NOT NULL,
    subtotal_factura numeric(10,2) NOT NULL,
    itbis numeric(10,2) NOT NULL,
    porcentaje_descuento numeric(5,2),
    total_facturado numeric(10,2) NOT NULL
);
    DROP TABLE public.facturas;
       public         heap    postgres    false            �            1259    16520    facturas_id_factura_seq    SEQUENCE     �   CREATE SEQUENCE public.facturas_id_factura_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.facturas_id_factura_seq;
       public          postgres    false    232            |           0    0    facturas_id_factura_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.facturas_id_factura_seq OWNED BY public.facturas.id_factura;
          public          postgres    false    231            �            1259    16483 
   inventario    TABLE     �   CREATE TABLE public.inventario (
    id_producto integer NOT NULL,
    cantidad_disponible integer NOT NULL,
    precio_unitario numeric(10,2) NOT NULL
);
    DROP TABLE public.inventario;
       public         heap    postgres    false            �            1259    16585    metodo_pago    TABLE     t   CREATE TABLE public.metodo_pago (
    id_metodo_pago integer NOT NULL,
    nombre character varying(50) NOT NULL
);
    DROP TABLE public.metodo_pago;
       public         heap    postgres    false            �            1259    16584    metodo_pago_id_metodo_pago_seq    SEQUENCE     �   CREATE SEQUENCE public.metodo_pago_id_metodo_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.metodo_pago_id_metodo_pago_seq;
       public          postgres    false    238            }           0    0    metodo_pago_id_metodo_pago_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.metodo_pago_id_metodo_pago_seq OWNED BY public.metodo_pago.id_metodo_pago;
          public          postgres    false    237            �            1259    16494    ordenes_compra    TABLE     *  CREATE TABLE public.ordenes_compra (
    id_orden integer NOT NULL,
    id_proveedor integer NOT NULL,
    fecha_emision date NOT NULL,
    subtotalfactura numeric(10,2) NOT NULL,
    descuento numeric(10,2) NOT NULL,
    itbis numeric(10,2) NOT NULL,
    total_facturado numeric(10,2) NOT NULL
);
 "   DROP TABLE public.ordenes_compra;
       public         heap    postgres    false            �            1259    16493    ordenes_compra_id_orden_seq    SEQUENCE     �   CREATE SEQUENCE public.ordenes_compra_id_orden_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public.ordenes_compra_id_orden_seq;
       public          postgres    false    229            ~           0    0    ordenes_compra_id_orden_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.ordenes_compra_id_orden_seq OWNED BY public.ordenes_compra.id_orden;
          public          postgres    false    228            �            1259    16592    pagos    TABLE     �   CREATE TABLE public.pagos (
    id_pago integer NOT NULL,
    id_factura integer NOT NULL,
    fecha_pago timestamp without time zone NOT NULL,
    monto_pagado numeric(10,2) NOT NULL,
    id_metodo_pago integer NOT NULL
);
    DROP TABLE public.pagos;
       public         heap    postgres    false            �            1259    16591    pagos_id_pago_seq    SEQUENCE     �   CREATE SEQUENCE public.pagos_id_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.pagos_id_pago_seq;
       public          postgres    false    240                       0    0    pagos_id_pago_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.pagos_id_pago_seq OWNED BY public.pagos.id_pago;
          public          postgres    false    239            �            1259    16460 	   productos    TABLE     �   CREATE TABLE public.productos (
    id_producto integer NOT NULL,
    nombre character varying(100) NOT NULL,
    id_unidad_medida integer NOT NULL,
    id_categoria integer NOT NULL
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    16459    productos_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productos_id_producto_seq;
       public          postgres    false    224            �           0    0    productos_id_producto_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productos_id_producto_seq OWNED BY public.productos.id_producto;
          public          postgres    false    223            �            1259    16477    proveedores    TABLE     �   CREATE TABLE public.proveedores (
    id_proveedor integer NOT NULL,
    nombre character varying(100) NOT NULL,
    no_telefono character varying(15) NOT NULL,
    correo character varying(100) NOT NULL
);
    DROP TABLE public.proveedores;
       public         heap    postgres    false            �            1259    16476    proveedores_id_proveedor_seq    SEQUENCE     �   CREATE SEQUENCE public.proveedores_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.proveedores_id_proveedor_seq;
       public          postgres    false    226            �           0    0    proveedores_id_proveedor_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.proveedores_id_proveedor_seq OWNED BY public.proveedores.id_proveedor;
          public          postgres    false    225            �            1259    16453    unidad_medida    TABLE     x   CREATE TABLE public.unidad_medida (
    id_unidad_medida integer NOT NULL,
    nombre character varying(50) NOT NULL
);
 !   DROP TABLE public.unidad_medida;
       public         heap    postgres    false            �            1259    16452 "   unidad_medida_id_unidad_medida_seq    SEQUENCE     �   CREATE SEQUENCE public.unidad_medida_id_unidad_medida_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.unidad_medida_id_unidad_medida_seq;
       public          postgres    false    222            �           0    0 "   unidad_medida_id_unidad_medida_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.unidad_medida_id_unidad_medida_seq OWNED BY public.unidad_medida.id_unidad_medida;
          public          postgres    false    221            �           2604    16442    categorias id_categoria    DEFAULT     �   ALTER TABLE ONLY public.categorias ALTER COLUMN id_categoria SET DEFAULT nextval('public.categorias_id_categoria_seq'::regclass);
 F   ALTER TABLE public.categorias ALTER COLUMN id_categoria DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    16435    clientes id_cliente    DEFAULT     z   ALTER TABLE ONLY public.clientes ALTER COLUMN id_cliente SET DEFAULT nextval('public.clientes_id_cliente_seq'::regclass);
 B   ALTER TABLE public.clientes ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    217    218    218            �           2604    16428    empleados id_empleado    DEFAULT     ~   ALTER TABLE ONLY public.empleados ALTER COLUMN id_empleado SET DEFAULT nextval('public.empleados_id_empleado_seq'::regclass);
 D   ALTER TABLE public.empleados ALTER COLUMN id_empleado DROP DEFAULT;
       public          postgres    false    215    216    216            �           2604    16551    estados id_estado    DEFAULT     v   ALTER TABLE ONLY public.estados ALTER COLUMN id_estado SET DEFAULT nextval('public.estados_id_estado_seq'::regclass);
 @   ALTER TABLE public.estados ALTER COLUMN id_estado DROP DEFAULT;
       public          postgres    false    234    233    234            �           2604    16524    facturas id_factura    DEFAULT     z   ALTER TABLE ONLY public.facturas ALTER COLUMN id_factura SET DEFAULT nextval('public.facturas_id_factura_seq'::regclass);
 B   ALTER TABLE public.facturas ALTER COLUMN id_factura DROP DEFAULT;
       public          postgres    false    231    232    232            �           2604    16588    metodo_pago id_metodo_pago    DEFAULT     �   ALTER TABLE ONLY public.metodo_pago ALTER COLUMN id_metodo_pago SET DEFAULT nextval('public.metodo_pago_id_metodo_pago_seq'::regclass);
 I   ALTER TABLE public.metodo_pago ALTER COLUMN id_metodo_pago DROP DEFAULT;
       public          postgres    false    238    237    238            �           2604    16497    ordenes_compra id_orden    DEFAULT     �   ALTER TABLE ONLY public.ordenes_compra ALTER COLUMN id_orden SET DEFAULT nextval('public.ordenes_compra_id_orden_seq'::regclass);
 F   ALTER TABLE public.ordenes_compra ALTER COLUMN id_orden DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    16595    pagos id_pago    DEFAULT     n   ALTER TABLE ONLY public.pagos ALTER COLUMN id_pago SET DEFAULT nextval('public.pagos_id_pago_seq'::regclass);
 <   ALTER TABLE public.pagos ALTER COLUMN id_pago DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    16463    productos id_producto    DEFAULT     ~   ALTER TABLE ONLY public.productos ALTER COLUMN id_producto SET DEFAULT nextval('public.productos_id_producto_seq'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    224    223    224            �           2604    16480    proveedores id_proveedor    DEFAULT     �   ALTER TABLE ONLY public.proveedores ALTER COLUMN id_proveedor SET DEFAULT nextval('public.proveedores_id_proveedor_seq'::regclass);
 G   ALTER TABLE public.proveedores ALTER COLUMN id_proveedor DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    16456    unidad_medida id_unidad_medida    DEFAULT     �   ALTER TABLE ONLY public.unidad_medida ALTER COLUMN id_unidad_medida SET DEFAULT nextval('public.unidad_medida_id_unidad_medida_seq'::regclass);
 M   ALTER TABLE public.unidad_medida ALTER COLUMN id_unidad_medida DROP DEFAULT;
       public          postgres    false    222    221    222            ]          0    16439 
   categorias 
   TABLE DATA           :   COPY public.categorias (id_categoria, nombre) FROM stdin;
    public          postgres    false    220   ��       [          0    16432    clientes 
   TABLE DATA           S   COPY public.clientes (id_cliente, nombre, apellido, cedula, direccion) FROM stdin;
    public          postgres    false    218   0�       g          0    16505    detalle_orden_compra 
   TABLE DATA           e   COPY public.detalle_orden_compra (id_orden, id_producto, precio_unidad_compra, cantidad) FROM stdin;
    public          postgres    false    230   ��       m          0    16569    detalles_factura 
   TABLE DATA           U   COPY public.detalles_factura (id_factura, id_producto, cantidad_vendida) FROM stdin;
    public          postgres    false    236   ��       Y          0    16425 	   empleados 
   TABLE DATA           Y   COPY public.empleados (id_empleado, nombre, apellido, puesto, "contraseña") FROM stdin;
    public          postgres    false    216   ƅ       l          0    16554    estado_facturas 
   TABLE DATA           Q   COPY public.estado_facturas (id_factura, id_estado, monto_pendiente) FROM stdin;
    public          postgres    false    235   �       k          0    16548    estados 
   TABLE DATA           ;   COPY public.estados (id_estado, nombre_estado) FROM stdin;
    public          postgres    false    234    �       i          0    16521    facturas 
   TABLE DATA           �   COPY public.facturas (id_factura, id_cliente, id_empleado, fecha, subtotal_factura, itbis, porcentaje_descuento, total_facturado) FROM stdin;
    public          postgres    false    232   �       d          0    16483 
   inventario 
   TABLE DATA           W   COPY public.inventario (id_producto, cantidad_disponible, precio_unitario) FROM stdin;
    public          postgres    false    227   :�       o          0    16585    metodo_pago 
   TABLE DATA           =   COPY public.metodo_pago (id_metodo_pago, nombre) FROM stdin;
    public          postgres    false    238   �       f          0    16494    ordenes_compra 
   TABLE DATA           �   COPY public.ordenes_compra (id_orden, id_proveedor, fecha_emision, subtotalfactura, descuento, itbis, total_facturado) FROM stdin;
    public          postgres    false    229   h�       q          0    16592    pagos 
   TABLE DATA           ^   COPY public.pagos (id_pago, id_factura, fecha_pago, monto_pagado, id_metodo_pago) FROM stdin;
    public          postgres    false    240   ��       a          0    16460 	   productos 
   TABLE DATA           X   COPY public.productos (id_producto, nombre, id_unidad_medida, id_categoria) FROM stdin;
    public          postgres    false    224   ��       c          0    16477    proveedores 
   TABLE DATA           P   COPY public.proveedores (id_proveedor, nombre, no_telefono, correo) FROM stdin;
    public          postgres    false    226   ̌       _          0    16453    unidad_medida 
   TABLE DATA           A   COPY public.unidad_medida (id_unidad_medida, nombre) FROM stdin;
    public          postgres    false    222   m�       �           0    0    categorias_id_categoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.categorias_id_categoria_seq', 8, true);
          public          postgres    false    219            �           0    0    clientes_id_cliente_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.clientes_id_cliente_seq', 1, true);
          public          postgres    false    217            �           0    0    empleados_id_empleado_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.empleados_id_empleado_seq', 1, false);
          public          postgres    false    215            �           0    0    estados_id_estado_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.estados_id_estado_seq', 1, false);
          public          postgres    false    233            �           0    0    facturas_id_factura_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.facturas_id_factura_seq', 1, false);
          public          postgres    false    231            �           0    0    metodo_pago_id_metodo_pago_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.metodo_pago_id_metodo_pago_seq', 5, true);
          public          postgres    false    237            �           0    0    ordenes_compra_id_orden_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.ordenes_compra_id_orden_seq', 1, false);
          public          postgres    false    228            �           0    0    pagos_id_pago_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.pagos_id_pago_seq', 1, false);
          public          postgres    false    239            �           0    0    productos_id_producto_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.productos_id_producto_seq', 120, true);
          public          postgres    false    223            �           0    0    proveedores_id_proveedor_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.proveedores_id_proveedor_seq', 3, true);
          public          postgres    false    225            �           0    0 "   unidad_medida_id_unidad_medida_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.unidad_medida_id_unidad_medida_seq', 7, true);
          public          postgres    false    221            �           2606    16444    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public            postgres    false    220            �           2606    16437    clientes clientes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.clientes
    ADD CONSTRAINT clientes_pkey PRIMARY KEY (id_cliente);
 @   ALTER TABLE ONLY public.clientes DROP CONSTRAINT clientes_pkey;
       public            postgres    false    218            �           2606    16509 .   detalle_orden_compra detalle_orden_compra_pkey 
   CONSTRAINT        ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_pkey PRIMARY KEY (id_orden, id_producto);
 X   ALTER TABLE ONLY public.detalle_orden_compra DROP CONSTRAINT detalle_orden_compra_pkey;
       public            postgres    false    230    230            �           2606    16573 &   detalles_factura detalles_factura_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_pkey PRIMARY KEY (id_factura, id_producto);
 P   ALTER TABLE ONLY public.detalles_factura DROP CONSTRAINT detalles_factura_pkey;
       public            postgres    false    236    236            �           2606    16430    empleados empleados_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id_empleado);
 B   ALTER TABLE ONLY public.empleados DROP CONSTRAINT empleados_pkey;
       public            postgres    false    216            �           2606    16558 $   estado_facturas estado_facturas_pkey 
   CONSTRAINT     u   ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_pkey PRIMARY KEY (id_factura, id_estado);
 N   ALTER TABLE ONLY public.estado_facturas DROP CONSTRAINT estado_facturas_pkey;
       public            postgres    false    235    235            �           2606    16553    estados estados_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.estados
    ADD CONSTRAINT estados_pkey PRIMARY KEY (id_estado);
 >   ALTER TABLE ONLY public.estados DROP CONSTRAINT estados_pkey;
       public            postgres    false    234            �           2606    16526    facturas facturas_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_pkey PRIMARY KEY (id_factura);
 @   ALTER TABLE ONLY public.facturas DROP CONSTRAINT facturas_pkey;
       public            postgres    false    232            �           2606    16487    inventario inventario_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_pkey PRIMARY KEY (id_producto);
 D   ALTER TABLE ONLY public.inventario DROP CONSTRAINT inventario_pkey;
       public            postgres    false    227            �           2606    16590    metodo_pago metodo_pago_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.metodo_pago
    ADD CONSTRAINT metodo_pago_pkey PRIMARY KEY (id_metodo_pago);
 F   ALTER TABLE ONLY public.metodo_pago DROP CONSTRAINT metodo_pago_pkey;
       public            postgres    false    238            �           2606    16499 "   ordenes_compra ordenes_compra_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.ordenes_compra
    ADD CONSTRAINT ordenes_compra_pkey PRIMARY KEY (id_orden);
 L   ALTER TABLE ONLY public.ordenes_compra DROP CONSTRAINT ordenes_compra_pkey;
       public            postgres    false    229            �           2606    16597    pagos pagos_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_pkey PRIMARY KEY (id_pago);
 :   ALTER TABLE ONLY public.pagos DROP CONSTRAINT pagos_pkey;
       public            postgres    false    240            �           2606    16465    productos productos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id_producto);
 B   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pkey;
       public            postgres    false    224            �           2606    16482    proveedores proveedores_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pkey PRIMARY KEY (id_proveedor);
 F   ALTER TABLE ONLY public.proveedores DROP CONSTRAINT proveedores_pkey;
       public            postgres    false    226            �           2606    16458     unidad_medida unidad_medida_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.unidad_medida
    ADD CONSTRAINT unidad_medida_pkey PRIMARY KEY (id_unidad_medida);
 J   ALTER TABLE ONLY public.unidad_medida DROP CONSTRAINT unidad_medida_pkey;
       public            postgres    false    222            �           2606    16510 7   detalle_orden_compra detalle_orden_compra_id_orden_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_id_orden_fkey FOREIGN KEY (id_orden) REFERENCES public.ordenes_compra(id_orden);
 a   ALTER TABLE ONLY public.detalle_orden_compra DROP CONSTRAINT detalle_orden_compra_id_orden_fkey;
       public          postgres    false    4780    230    229            �           2606    16515 :   detalle_orden_compra detalle_orden_compra_id_producto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_orden_compra
    ADD CONSTRAINT detalle_orden_compra_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 d   ALTER TABLE ONLY public.detalle_orden_compra DROP CONSTRAINT detalle_orden_compra_id_producto_fkey;
       public          postgres    false    4774    224    230            �           2606    16574 1   detalles_factura detalles_factura_id_factura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);
 [   ALTER TABLE ONLY public.detalles_factura DROP CONSTRAINT detalles_factura_id_factura_fkey;
       public          postgres    false    232    236    4784            �           2606    16579 2   detalles_factura detalles_factura_id_producto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalles_factura
    ADD CONSTRAINT detalles_factura_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 \   ALTER TABLE ONLY public.detalles_factura DROP CONSTRAINT detalles_factura_id_producto_fkey;
       public          postgres    false    4774    224    236            �           2606    16564 .   estado_facturas estado_facturas_id_estado_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_id_estado_fkey FOREIGN KEY (id_estado) REFERENCES public.estados(id_estado);
 X   ALTER TABLE ONLY public.estado_facturas DROP CONSTRAINT estado_facturas_id_estado_fkey;
       public          postgres    false    234    235    4786            �           2606    16559 /   estado_facturas estado_facturas_id_factura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.estado_facturas
    ADD CONSTRAINT estado_facturas_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);
 Y   ALTER TABLE ONLY public.estado_facturas DROP CONSTRAINT estado_facturas_id_factura_fkey;
       public          postgres    false    232    4784    235            �           2606    16527 !   facturas facturas_id_cliente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.clientes(id_cliente);
 K   ALTER TABLE ONLY public.facturas DROP CONSTRAINT facturas_id_cliente_fkey;
       public          postgres    false    232    4768    218            �           2606    16532 "   facturas facturas_id_empleado_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.facturas
    ADD CONSTRAINT facturas_id_empleado_fkey FOREIGN KEY (id_empleado) REFERENCES public.empleados(id_empleado);
 L   ALTER TABLE ONLY public.facturas DROP CONSTRAINT facturas_id_empleado_fkey;
       public          postgres    false    232    216    4766            �           2606    16488 &   inventario inventario_id_producto_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.productos(id_producto);
 P   ALTER TABLE ONLY public.inventario DROP CONSTRAINT inventario_id_producto_fkey;
       public          postgres    false    4774    224    227            �           2606    16500 /   ordenes_compra ordenes_compra_id_proveedor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ordenes_compra
    ADD CONSTRAINT ordenes_compra_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedores(id_proveedor);
 Y   ALTER TABLE ONLY public.ordenes_compra DROP CONSTRAINT ordenes_compra_id_proveedor_fkey;
       public          postgres    false    4776    226    229            �           2606    16598    pagos pagos_id_factura_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_factura_fkey FOREIGN KEY (id_factura) REFERENCES public.facturas(id_factura);
 E   ALTER TABLE ONLY public.pagos DROP CONSTRAINT pagos_id_factura_fkey;
       public          postgres    false    240    232    4784            �           2606    16603    pagos pagos_id_metodo_pago_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pagos
    ADD CONSTRAINT pagos_id_metodo_pago_fkey FOREIGN KEY (id_metodo_pago) REFERENCES public.metodo_pago(id_metodo_pago);
 I   ALTER TABLE ONLY public.pagos DROP CONSTRAINT pagos_id_metodo_pago_fkey;
       public          postgres    false    238    240    4792            �           2606    16471 %   productos productos_id_categoria_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria);
 O   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_id_categoria_fkey;
       public          postgres    false    224    4770    220            �           2606    16466 )   productos productos_id_unidad_medida_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_id_unidad_medida_fkey FOREIGN KEY (id_unidad_medida) REFERENCES public.unidad_medida(id_unidad_medida);
 S   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_id_unidad_medida_fkey;
       public          postgres    false    222    4772    224            ]   s   x�3�t��ML>�2�ˈ�)5)3%��˘�������b.N�Ģ��b5��������)�[QiI"H,,�(���Ō3 1/1%����D.sN������jN��܂�ԪD�=... z�$�      [   L   x�3�t�K���/H��4402650��05�t,�S��/>�R����S�RR�/LN-J-Vp-.T042����� �v�      g      x������ � �      m      x������ � �      Y      x������ � �      l      x������ � �      k      x������ � �      i      x������ � �      d   �  x�MT[�� ����KT^s���BO���	!��$�x�o�gN�A{��ċb����"� H��I��<�#q2���A*�,��V�o�3��:է)$�B^�%��@�z�&Z%v�{a����HV�{@ll�N6Nf��Wr���s"�w0dl�)@޶DŤ��3.�f+��	'RK���:^�SW���'�����uŁ]���8 ��=�r6�񬃮Z	���V��R�����R���2��A#]`�ٸfa|&w�!�	��Tھ� ��%�j -Ӽh�3�O���.� pXh���^K[���.ߢ�j@H��5�V���/!1S�1���?O�:��e��B^XAP�׎���ϫ{�Q^[��l���.~R��3�\��_�x4F\��j�W����b�熧�|�k���z��e�u��^l?ϯ���Ty��.��=��W���      o   V   x�3�tMKM.�,��2�I,�J-ITHIUH9�2)�$��Y0������	g@be@b�)g@i^I~��[Qjq��obQvj	W� q��      f      x������ � �      q      x������ � �      a     x�mU;��F�����"�`����RI��$��*'M`��`� x�
6r����\k3��F_�d)�e+5'�H&+{C)��,����G˖2'�tgZ���(���UV�{��E"�$���UV��M���g����a8�>��(����O���:�}`}b�#�T��ݫ�?k�|M���p�e���U�ҝ5rYO�
HF��t�5��;�a��sz�$�r8��R��)�@��#Q��o��UԬ���	��d�U���/��6��V�"�΃��ٲ~M��>�.����9
;�Ś�=�S����|~<��H+$�l�<��s�e����]��᳤kMtRaj(�]��:�q�V��2�d0����xw�L�9�\�d�[���y�)}��Q�N�^���{��pN7��� �p�=V�G���7Wҳ�kJ�[�1F����O��~��G� Z	�٨��'F�f�GG2�k��'l'!7�r��2Ʉ�oZ��	IT�%��Z18�9�WY��`�@+��T���$��TDi���v��S	-o�RU8� �N�:�:�\�&�m"��M��4+���mh���RO��P��F*X~7kPo:�p{ C�����[���٦�1,z]��jx�CQf�\?F�h�/g!��<�7�bˊ���0�C��~F�ї�lT��{��pD��,
9�y\����R�g3�/Qtg� �k��`�ָ���x�O��P�f�Ě���f�g�1EY�,&�ߝ�M揜���z4��X��\Їy��:�%�2z�Ut+O��X�\���ҺŠ���ňlP���x:9N���K:�`
��^�t-�\���t�ܕO��+Oϯ_0����f�_/�_�;�蹼�c8G��/�G{�x��,?���6/�8�� _��V��n\���
��p�����)V���l1�����(�N���	��Iӌ��� �(;+�+�X0e��R��F��4-�ӌOΝ�l�U�ogp�g5�y�x������L��_�l��H��xď1z����[��A.!��u�Z��j�      c   �   x�=˱� ����'h���������������
ԡOo��z��)6��(�D���?(f��A�M����rc�ǻ7�*K��l�)G���P4��٤�
ۇ���vR27t�J���M���)d2���J��E��~�8�o;      _   E   x�3���L*J�2�t/J���2�K��L8�3s���b���y�)�)\f���9@R`��W������ ���     