import express from "express";

//Crear una instancia de Express
const app = express();

//Configurar el puerto en el que el servidor escuchara
const PORT = 3000;

//Ruta basica
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

//Ruta GET para el home
//solicitud http://localhost:3000/home

app.get("/home", (req, res) => {
  res.send("Bienvenido a la pagina de inicio");
});

//Ruta GET para recibir datos simples
//solicitud http://localhost:3000/datos

app.get("/datos", (req, res) => {
  res.send("Hola, soy un dato simple");
});

//Ruta Get con parametro de ruta
//solicitud http://localhost:3000/user/123

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Hola, soy el usuario ${userId}`);
});

//Ruta GET con multiples parametros
//solicitud http://localhost:3000/search?q=javascript

app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Soy el resultado de la busqueda por ${query}`);
});

//Ruta GET con multiples parametros de consulta
//solicitud http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50

app.get("/filter", (req, res) => {
  const { type, minPrice, maxPrice } = req.query;
  res.send(
    `Filtrar por tipo ${type}, con un rango de precios. ${minPrice}-${maxPrice}`
  );
});

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
