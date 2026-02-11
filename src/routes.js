const {Router} = require("express");

const routes = new Router();

const customers = require("./app/controllers/CustomersController"); //Importando o controller

routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);

module.exports = routes; //Exportando as rotas para serem importadas em outros arquivos, como o app.js