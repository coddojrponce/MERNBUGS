const mongoose = require('mongoose')
const DbName = "PizzaDatabase"

mongoose.connect(`mongodb://127.0.0.1/${DbName}`)
.then(()=>{
    console.log("Successfully connected to the DB")
})
.catch((err)=>{
    console.log("ERROR connecting to the DB" + err)
})