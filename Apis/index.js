const express = require('express');// chamando uma bilbioteca

const app = express();// atribuindo o express na variavell app e inicialando o express.

app.listen('3000'); // criação de server, definindo porta
console.log("Run");
/*
app.route('/').get((req, res) => res.send("hello word"))
app.route('/juara').get((req, res) => res.send("hello word é o caralho"))
*/
//middware
//app.use(express.json())//para mostrar json atraves de uma ponte.
/*
app.route('/').post((req, res) => res.send(req.body))//mostra no insomia
*/
/*
app.route('/').get((req, res) => res.send(juice))
let juice = "laranja"
app.route('/').put((req, res) => {
    juice = req.body.juice
    res.send(juice)
})
*/

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})
