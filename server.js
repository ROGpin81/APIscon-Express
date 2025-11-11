const express = require('express');
const app = express();
const PORT = 3000;

const usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@email.com' },
];

app.get('/api/usuarios', (req, res) => {
  res.status(200).json(usuarios);
});

app.listen(PORT, ()=>{
    		console.log(`Servidor escuchando en http://localhost:${PORT}`);
	});
