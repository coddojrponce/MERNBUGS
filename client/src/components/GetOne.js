import {useState,useEffect} from 'react'
import axios from 'axios'
import Nav from "./Nav"
import {useParams,useNavigate} from 'react-router-dom'
        // ***************************TODO Finish Get One 



const GetOne = (props) => {
  const [pizza,setPizza] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
  axios.get(`http://localhost:8000/api/pizza/${id}`)
  .then((pizza)=>{
    setPizza(pizza.data.pizza)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

const toppingArray = [pizza.toppingOne,pizza.toppingTwo,pizza.toppingThree]


  return (
    <div>
        <Nav/>
        <h2>Pizza Name: {pizza.name}</h2>
        <p>Crust: {pizza.crust}</p>
        <p>Sauce: {pizza.sauce}</p>
        <p>Toppings:
          {
            toppingArray.map((item,index)=>(index > 0 && item  ? ","+item : item))
          }
        </p>
        <button className="danger" onClick={()=>navigate('/pizza')}>Exit</button>
        
    </div>
  )
}

export default GetOne