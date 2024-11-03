# Fresh Market

## Available Scripts

Para correr el proyecto usar el siguiente comando en la terminal

### `npm start`

## Dependencias

### Install react router

`npm install react-router-dom`

### Install react icons

`npm i react-icons`

### Install react query

`npm i react-query`

### Install axios

`npm install axios`

### Install dotenv

`npm install dotenv`

### Install react-hook-form

`npm install react-hook-form`

## Estructura del proyecto

Dentro de `src` tenemos la siguiente estructura de carpetas:

- **components**: La cual contendra cada componente reutilizable<br> - **layaouts**: Carpeta con componentes que cumplen la funcion de layaout<br> - **NombreComponente**: Cada componente tendra su propia carpeta (por el momento)<br>
- **pages**: La cual contiene las diferentes paginas del proyecto

## Server

Instalar dependencias, dentro de la carpeta `/server/`:

- npm init -y
- npm i express
- npm i nodemon -D
- npm install sequelize pg pg-hstore
- npm install joi
- npm i bcrypt

Agregar la siguiente linea en package.json -> scripts:

"dev": "nodemon server"

Crear un archivo `.env` dentro de la carpeta `/server/` y agregar las siguientes variables:

        API_KEY = "MY-API-KEY"
        SERVICE_NAME = "MY-SERVICE-NAME"
        POSTGRES_USERNAME = "USERNAME"
        POSTGRES_PASSWORD = "PASSWORD"
        DATABASE = "DATABASE-NAME"

### Para inciar el servidor

Dentro de la carpeta server:

- `npm run dev`

Los requests estan protegidos con los request headers: `service_api_key` y `nombre_service`. Es decir, cada request debe tener el API Key y nombre del servicio autorizados.
