class CustomersController {
    
    constructor() {
        this.customers = [
            {id: 1, name: "Gabe", email: "gabe@email.com"},
            {id: 2, name: "Alice", email: "alice@email.com"},
            {id: 3, name: "Bob", email: "bob@email.com"}
        ];

        this.index = this.index.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.destroy = this.destroy.bind(this);
    }

    //Listagem dos registros
    index  (req, res)  {
        return res.json(this.customers);
    }
    
    // Recupera 1 registro
    show  (req, res)  {
        const id = parseInt(req.params.id);
        const customer = this.customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        console.log("GET::/customers/:id", customer); 

        return res.status(status).json(customer);
    }

    // Cria um novo registro
    create  (req, res)  {
        const {name, email} = req.body;
        const nextId = this.customers[this.customers.length - 1].id + 1;

        const newCustomer = {id: nextId, name, email};
        this.customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    }
    
    //Atualiza um registro
    update (req, res)  {
        const id = parseInt(req.params.id);
        const {name, email} = req.body;

        const index = this.customers.findIndex(item => item.id === id); 
        const status = index >=0 ? 200 : 404;

        if (index >= 0){
            this.customers[index] = {id: parseInt(id), name, email};
        }
        return res.status(status).json(this.customers[index]);
    }

    //Exclui um registro 
    destroy (req, res) {
        const id = parseInt(req.params.id);
        const index = this.customers.findIndex(item => item.id === id);
        const status = index >=0 ? 200 : 404;
        
        if(index >= 0){
            this.customers.splice(index, 1);
        }
        
        return res.status(status).json({message: "Cliente deletado com sucesso!"});
    }
}

export default new CustomersController();