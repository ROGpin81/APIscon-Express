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

app.get('/categorias', (req, res)=>{
    const categorias = [
        {"id": 1, "nombre": "Electrónica"},
        {"id": 2, "nombre": "Ropa"},
        {"id": 3, "nombre": "Hogar"},
        {"id": 4, "nombre": "Deportes"},
        {"id": 5, "nombre": "Libros"}
    ];
    res.json(categorias);
});

app.get('/pedidos', (req, res)=>{
    const pedidos = [
        {"id": 1, "usuario": "Juan", "total": 500},
        {"id": 2, "usuario": "María", "total": 750},
        {"id": 3, "usuario": "Pedro", "total": 320},
        {"id": 4, "usuario": "Ana", "total": 1200},
        {"id": 5, "usuario": "Carlos", "total": 890}
    ];
    res.json(pedidos);
});

app.listen(PORT, ()=>{
    		console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
