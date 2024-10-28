
const express = require('express');
const app = express();

const port = 3000;

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Define as rotas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Home.html');
});
app.get('/Info', (req, res) => {
  res.sendFile(__dirname + '/informatica.html');
});
app.get('/TKD', (req, res) => {
  res.sendFile(__dirname + '/taekwondo.html');
});

app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});
