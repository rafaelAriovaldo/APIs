const express = require('express');// chamando uma bilbioteca

const app = express();// atribuindo o express na variavell app e inicialando o express.

app.listen('3000'); // criação de server, definindo porta
console.log("Run");

app.route('/').get((req, res) => res.send("hello word"))
app.route('/juara').get((req, res) => res.send("hello word é o caralho"))
app.route('/').post((req, res) => console.log(req.body))