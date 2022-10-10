import {useState,useEffect} from 'react'
import axios from 'axios'
        // ***************************TODO Finish Get One 



const GetOne = (props) => {
  const [pizza,setPizza] = useState({})

  useEffect(()=>{
  axios.get("http://localhost:8000/api/pizza")
  .then((pizza)=>{
    setPizza(pizza)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])



  return (
    <div>
        <h2>Pizza Name:</h2>
        <p>Crust</p>
        <p>Sauce</p>
        <p>Toppings</p>
    </div>
  )
}

export default GetOne