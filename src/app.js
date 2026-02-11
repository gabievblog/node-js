import express from "express";
import routes from "./routes.js";

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


export default new App().server; //Exportando a instância do servidor para ser importada em outros arquivos, como o index.js
