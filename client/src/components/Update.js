import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom'
import Nav from './Nav'


const Update = (props) => {

    const [pizza,setPizza] = useState({name:"",crust:"",sauce:"",cheese:"",toppingOne:"",toppingTwo:"",toppingThree:""})
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
      
      axios.get(`http://localhost:8000/api/pizza/${id}`)
      .then((pizza)=>{
        const {_id,__v,...other} = pizza.data.pizza
        setPizza(other)
      })
      .catch((err)=>{
        console.log(err)
      })
// ***************************Missing Dependency Array [] causing a loop
    },[])



    const handleChange = (e)=>{
        setPizza({...pizza,[e.target.name]:e.target.value})
    }



    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pizza/${id}`,pizza)
        .then((newPizza)=>{
            console.log("Successfully Updated a Pizza")
            navigate('/')
        })
        .catch((err)=>{
          console.log(err.response.data.err.errors)
          const errors = err.response.data.err.errors
          setErrors(errors)
        })
    }


    const crustArray = [
        "Stuffed Crust",
        "Thin Crust",
        "Cauliflower Crust",
        "New York Style",
        "Chicago Deep-Dish",
        "Hand Tossed",
        "Other"
    ]

    const cheeseArray = [
        "Cheddar",
        "Provolone",
        "Mozzarella",
        "Parmesan",
        "Gouda",
        "Ricotta",
        "Ultimate Cheese",

    ]

    const sauceArray = [
        "Pesto",
        "Marinara",
        "White Garlic Sauce",
        "Garlic Ranch Sauce",
        "Buffalo Sauce",
        "Hummus",
        "Alfredo"
    ]


  return (
    <div>
        <Nav/>
        <h2>Update a Pizza</h2>
        <form className="pizza-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">
                    Name:
                </label>
                <input onChange={handleChange} name="name" type="text" value={pizza.name}/>
                {errors.name ? <p>{errors.name.message}</p> : null}

            </div>
            <div>
                <label htmlFor="">
                    Crust:
                </label>
                <select name="crust" id="" onChange={handleChange} value={pizza.crust} >
                    <option value=""></option>
                    {
                        crustArray.map((item,index)=>(
                            <option key = {index} value={item}>{item}</option>
                        ))
                    }
                </select>
                {errors.crust ? <p>{errors.crust.message}</p> : null}

            </div>
            <div>
            <label htmlFor="">
                    Sauce:
                </label>
                <select name="sauce" id="" onChange={handleChange}  value={pizza.sauce} >
                    <option value=""></option>
                    {
                        sauceArray.map((item,index)=>(
                            <option key = {index} value={item}>{item}</option>
                        ))
                    }
                </select>
                {errors.sauce ? <p>{errors.sauce.message}</p> : null}

            </div>
            <div>
            <label htmlFor="">
                    Cheese:
                </label>
                <select name="cheese" id="" onChange={handleChange}  value={pizza.cheese}>
                    <option value=""></option>
                    {
                        cheeseArray.map((item,index)=>(
                            <option key = {index} value={item}>{item}</option>
                        ))
                    }
                </select>
                {errors.cheese ? <p>{errors.cheese.message}</p> : null}

            </div>
            <div>
                <label htmlFor="">
                    First Topping:
                </label>
                <input onChange={handleChange} name="toppingOne" type="text"  value={pizza.toppingOne} />
                {errors.toppingOne ? <p>{errors.toppingOne.message}</p> : null}

            </div>
            <div>
                <label htmlFor="">
                    Second Topping:
                </label>
                <input onChange={handleChange} name="toppingTwo" type="text" value={pizza.toppingTwo || ""} />
                {errors.toppingTwo ? <p>{errors.toppingTwo.message}</p> : null}

            </div>
            <div>
                <label htmlFor="">
                    Third Topping:
                </label>
                <input onChange={handleChange} name="toppingThree" type="text" value={pizza.toppingThree || ""} />
                {errors.toppingThree? <p>{errors.toppingThree.message}</p> : null}

            </div>
            <div>
                <button type="submit">Update This Pizza !</button>
            </div>
            
        </form>
    </div>
  )
}

export default Update