const express = require('express');
const app = express();
const PORT = 3000;

const usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@email.com' },
];

const productos = [
  { id: 1, nombre: 'Laptop', precio: 1200 },
];

app.get('/api/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});

app.get('/api/productos', (req, res) => {
  res.status(200).json(productos);
});

app.listen(PORT, ()=>{
    		console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
