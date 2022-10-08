const PizzaController = require('../controllers/pizza.controller')

module.exports = (app)=>{

    //CREATE
    app.post("/api/pizza",PizzaController.create)
    //READ
    app.get("/api/pizza",PizzaController.getAll)
    app.get("/api/pizza/:id",PizzaController.getOne)
    //UPDATE
    app.put("/api/pizza/:id",PizzaController.update)
    //DELETE
    app.delete("/api/pizza/:id",PizzaController.delete)

}