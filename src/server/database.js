import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Cargar las variables de entorno

const username = process.env.POSTGRES_USERNAME;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.DATABASE;

if (!username || !password || !database) {
  throw new Error(
    "Variables de entorno sin definir. Favor revisar el archivo README.md del repositorio."
  );
}

const sequelize = new Sequelize(
  `postgres://${username}:${password}@localhost:5432/${database}`,
  {
    dialect: "postgres",
    define: {
      freezeTableName: true, // Evita que Sequelize pluralice automáticamente los nombres de las tablas
    },
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexión exitosa con la base de datos.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
}

testConnection();

export default sequelize;
