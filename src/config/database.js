module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'secret',
    database: 'nodejs',
    define: {
        timestamps: true, //Cria duas colunas: created_at e updated_at
        underscored: true, //nomenclatura snake_case para os campos do banco de dados
        underscoredAll: true //nomenclatura snake_case para as tabelas do banco de dados
    }
}