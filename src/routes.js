 const {Router} = require("express");

 const routes = new Router();

routes.get("/", (req, res) => {
    return res.json({message: "Hello!"});
});

module.exports = routes; //Exportando as rotas para serem importadas em outros arquivos, como o app.js