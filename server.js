const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hola Mundo...');
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

app.listen(PORT, ()=>{
    		console.log(`Servidor escuchando en http://localhost:${PORT}`);
	});
