const express = require("express");
const routes = require("./routes");

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}


module.exports =  new App().server; //Exportando a instância do servidor para ser importada em outros arquivos, como o index.js
