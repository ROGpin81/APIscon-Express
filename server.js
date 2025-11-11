const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hola Mundo...');
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
