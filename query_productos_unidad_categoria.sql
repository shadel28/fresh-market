-- Unidad_medida
INSERT INTO Unidad_medida (Nombre) 
VALUES
('Libra'),        -- Id 1
('Gramo'),        -- Id 2
('Litro'),        -- Id 3
('Kilogramo'),    -- Id 4
('Unidad');       -- Id 5
('Mililitro');    -- Id 6
('Onza');    	  -- Id 7

-- Categorias
INSERT INTO Categorias (Nombre)
VALUES
('Almacén'),          -- Id 1
('Bebidas'),          -- Id 2
('Lácteos'),          -- Id 3
('Carnes & Pescados'),-- Id 4
('Frutas & Verduras'),-- Id 5
('Panadería'),        -- Id 6
('Congelados'),       -- Id 7
('Limpieza');         -- Id 8

-- Productos
INSERT INTO Productos (Nombre, Id_unidad_medida, Id_categoria)
VALUES
('Harina de trigo', 1, 1),    -- Almacén
('Azúcar', 2, 1),             -- Almacén
('Coca-Cola', 3, 2),          -- Bebidas
('Leche entera', 3, 3),       -- Lácteos
('Queso cheddar', 1, 3),      -- Lácteos
('Pechuga de pollo', 1, 4),   -- Carnes & Pescados
('Salmón', 1, 4),             -- Carnes & Pescados
('Manzanas', 5, 5),           -- Frutas & Verduras
('Plátanos', 5, 5),           -- Frutas & Verduras
('Pan integral', 2, 6),       -- Panadería
('Croissants', 5, 6),         -- Panadería
('Pizza congelada', 2, 7),    -- Congelados
('Helado de vainilla', 2, 7), -- Congelados
('Detergente líquido', 6, 8),-- Limpieza
('Jabón en barra', 5, 8),    -- Limpieza
('Yogur griego', 2, 3),       -- Lácteos
('Zumo de naranja', 3, 2),    -- Bebidas
('Pescado congelado', 4, 4),      -- Carnes & Pescados
('Avena', 2, 1),              -- Almacén
('Cerveza', 7, 2);            -- Bebidas
