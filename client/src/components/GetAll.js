import {useState,useEffect} from 'react'
import PersonCard from './PizzaCard'
import axios from 'axios'
import Nav from './Nav'

const GetAll = (props) => {

  const [listOfPizzas,setListOfPizzas] = useState([])
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/pizza")
    .then((list)=>{
      setListOfPizzas(list.data.allPizzas)
    })
    .catch((err)=>{
      console.log(err)
    })
// ***************************Error with dependency missing causing it to loop 
  },[])


  return (
    
    <div>
        <Nav/>
        <h2>List of All Pizza</h2>
        <div className="all-pizzas">
        {

          listOfPizzas.length > 0 ?
// ***************************Error with map , due to not returning
          listOfPizzas.map((item,index)=>(
// ***************************Props being passed with incorrect names
            <PersonCard 
            key={index}
            name={item.name} 
            crust={item.crust} 
            cheese = {item.cheese} 
            sauce={item.sauce} 
            toppingOne = {item.toppingOne}
            toppingTwo = {item.toppingTwo}
            toppingThree = {item.toppingThree}
            listOfPizzas = {listOfPizzas}
            setListOfPizzas = {setListOfPizzas}
            _id={item._id}
              />
          ))

          : <h3>...No Pizzas Found 😭</h3> 
          }
        </div>

    </div>
  )
}

export default GetAll