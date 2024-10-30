import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerSuperheroesMayoresde30Controller,
  buscarSuperheroesPorAtributoController,
} from "../project-root/controllers/superheroesController.mjs";

const app = express();
const PORT = 3005;

app.get("/superheroes/id/:id", obtenerSuperheroePorIdController);

app.get(
  "/superheroes/atributo/:atributo/:valor",
  buscarSuperheroesPorAtributoController
);

app.get("/superheroes/edad/mayor30", obtenerSuperheroesMayoresde30Controller);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
