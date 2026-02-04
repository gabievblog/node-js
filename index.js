const express = require('express');

const server = express();


//Query params = ?nome=Gabe&idade=23 ->opcional -> http://localhost:3000/hello?nome=Gabe&idade=23
server.get("/hello", (req, res) => {
    const {nome, idade} = req.query; //Pegando o valor do query param "nome" e "idade"
    
    return res.json({ 
        title: "Hello",
        message: `Hello ${nome}! How are you? You are ${idade} years old.` 
    });
});


//Route params = /hello/:nome ->obrigatório  -> http://localhost:3000/hello/Gabe
server.get("/hello/:nome", (req, res) => {
    const {nome} = req.params; //Pegando o valor do route param "nome"
    
    return res.json({ 
        title: "Hello",
        message: `Hello ${nome}! How are you?` 
    });
});

server.listen(3000); //Definindo a porta do servidor