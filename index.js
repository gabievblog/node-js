const express = require('express');

const server = express();

// //Query params = ?nome=Gabe&idade=23 ->opcional -> http://localhost:3000/hello?nome=Gabe&idade=23
// server.get("/hello", (req, res) => {
//     const {nome, idade} = req.query; //Pegando o valor do query param "nome" e "idade"
    
//     return res.json({ 
//         title: "Hello",
//         message: `Hello ${nome}! How are you? You are ${idade} years old.` 
//     });
// });


// //Route params = /hello/:nome ->obrigatório  -> http://localhost:3000/hello/Gabe
// server.get("/hello/:nome", (req, res) => {
//     const {nome} = req.params; //Pegando o valor do route param "nome"
    
//     return res.json({ 
//         title: "Hello",
//         message: `Hello ${nome}! How are you?` 
//     });
// });

// server.listen(3000); //Definindo a porta do servidor

//API REST - Rotas definidas aqui e executadas no Insomnia 
server.use(express.json());

let customers = [
    {id: 1, name: "Gabe", email: "gabe@email.com"},
    {id: 2, name: "Alice", email: "alice@email.com"},
    {id: 3, name: "Bob", email: "bob@email.com"}
];

//Rota para obter a lista de clientes (list)
server.get("/customers", (req, res) => {
    return res.json(customers);
});

//Rota para obter um cliente específico por id (show)
server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id); // O id vem como string, então precisamos converter para número
    const customer = customers.find(item => item.id === id); // Encontrando o cliente com o id correspondente
    const status = customer ? 200 : 404; // Se o cliente for encontrado, retorna 200, caso contrário, retorna 404

    console.log("GET::/customers/:id", customer); // Log para verificar o cliente encontrado

    return res.status(status).json(customer); // Retorna o cliente encontrado ou null
});

//Rota para criar um novo cliente (create)
server.post("/customers", (req, res) => {
    const {name, email} = req.body; // Pegando os dados do cliente do corpo da requisição
    const nextId = customers[customers.length - 1].id + 1; // Gerando o próximo id com base no último cliente da lista

    const newCustomer = {id: nextId, name, email}; // Criando o novo cliente com os dados fornecidos
    customers.push(newCustomer); // Adicionando o novo cliente à lista

    return res.status(201).json(newCustomer); // Retorna o cliente criado com status 201 (Created)
});

//Rota para atualizar um cliente existente (update)
server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id); //Mesmo processo que do GET para obter o id do cliente
    const {name, email} = req.body;

    const index = customers.findIndex(item => item.id === id); // Encontrando o índice do cliente com o id correspondente
    const status = index >=0 ? 200 : 404; // index >= 0: verifica se o findIndex encontrou um item. index >= 0 significa que há um cliente com esse id. Se for false (ou seja index === -1), o cliente não existe.

    if (index >= 0){
        customers[index] = {id: parseInt(id), name, email}; // Atualizando o cliente com os novos dados
    }
    return res.status(status).json(customers[index]); // Retorna o cliente atualizado ou null
});

//Rota para deletar um cliente (delete)
server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id === id);
    const status = index >=0 ? 200 : 404;
    
    if(index >= 0){
        customers.splice(index, 1); // Removendo o cliente da lista
    }
    
    return res.status(status).json({message: "Cliente deletado com sucesso!"});
});

server.listen(3000);


