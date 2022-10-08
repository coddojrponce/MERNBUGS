const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
app.use(express.json(),cors())


//connect to db
require('./config/mongoose.config')

//import routes
require('./routes/pizza.routes')(app)


app.listen(8000,()=>{console.log(`Locked and loaded on port ${port}`)})