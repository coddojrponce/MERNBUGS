const mongoose = require('mongoose')


const PizzaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A Pizza Name is required"],
        minLength:[3,"Name must be at least 3 characters long"]
    },
    crust:{
        type:String,
        required:[true,"Pizza Crust is required"],
        enum:[
            "Stuffed Crust",
            "Thin Crust",
            "Cauliflower Crust",
            "New York Style",
            "Chicago Deep-Dish",
            "Hand Tossed",
            "Other"
        ]
    },
    toppingOne:{
        type:String,
        required:[true,"At least One Topping is required"],
        minLength:[3,"Topping should be at least 3 characters long"]
    },
    toppingTwo:{
        type:String,
    },
    toppingThree:{
        type:String,
    },
    cheese:{
        type:String,
        required:[true,"Cheese is required"],
        enum:[
            "Cheddar",
            "Provolone",
            "Mozzarella",
            "Parmesan",
            "Gouda",
            "Ricotta",
            "Ultimate Cheese",

        ]
    },
    sauce:{
        type:String,
        required:[true,"Sauce is required"],
        enum:[
            "Pesto",
            "Marinara",
            "White Garlic Sauce",
            "Garlic Ranch Sauce",
            "Buffalo Sauce",
            "Hummus",
            "Alfredo"
        ]
    }

})

const Pizza = mongoose.model("Pizza",PizzaSchema)

module.exports = Pizza