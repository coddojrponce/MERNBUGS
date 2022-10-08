const Pizza = require('../models/pizza.model')


module.exports = {
    //CREATE Done Asynchronously 
    create:async (req,res)=>{

        try{
            const newPizza = await Pizza.create(req.body)
            if(newPizza){
                res.status(201).json({newPizza})
            }
            else{
                res.status(400).json({msg:"Something Went Wrong on Create, No Pizza Created"})
            }
            
        }
        catch(err){
            res.status(400).json({msg:"Catch: Something Went Wrong on Create",err:err})
        }
    },
    //READ
    getOne:(req,res)=>{
        Pizza.findOne({_id:req.params.id})
        .then((pizza)=>{
            res.status(200).json({pizza})
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something Went Wrong on Get One"})
        })
    },
    getAll:(req,res)=>{
        Pizza.find({})
        .then((allPizzas)=>{
            res.status(200).json({allPizzas})
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something Went Wrong on Get One"})
        })
    },
    //UPDATE
    update:(req,res)=>{
        Pizza.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((updatedPizza)=>{
            res.status(200).json({updatedPizza})
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something Went Wrong on Get One and Update",err})
        })
    },
    //DELETE
    delete:(req,res)=>{
        Pizza.findOneAndDelete()
        .then((deletedPizza)=>{
            res.status(200).json({deletedPizza})
        })
        .catch((err)=>{
            res.status(400).json({msg:"Something Went Wrong on Get One and Update"})
        })
    }
}