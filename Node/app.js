import express from "express";
import cors from 'cors';

import db from "./database/db.js";
import router from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", router);

try {
  await db.authenticate();
  console.log("Conexion completada");
} catch (error) {
  console.log("Error en la conexion");
}

/* app.get('/', (request, response) => {
  response.send("Hola mundo");
}); */

app.listen(8000, () => {
  console.log("Server up running in http://localhost:8000");
})