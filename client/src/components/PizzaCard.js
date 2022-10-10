import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const PizzaCard = (props) => {

    const {name,crust,toppingOne,toppingTwo,toppingThree,cheese,sauce,listOfPizzas,setListOfPizzas,_id} = props
    const toppingArray = [toppingOne,toppingTwo,toppingThree]
    const navigate = useNavigate()

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8000/api/pizza/${id}`)
      .then(()=>{
        const newList = listOfPizzas.filter((item,index)=>(item._id != id))
        setListOfPizzas(newList)
        console.log("Successfully Deleted a Pizza")

      })
      .catch((err)=>{
        console.log(err)
      })
    }

    const handleUpdate = (id)=>{
      navigate(`/pizza/${id}/edit`)
    }

    const handleView = (id)=>{
      navigate(`/pizza/${id}`)
    }
  return (
    <div className="pizza-card">
        <h3>Name:{name}</h3>
        <p>Crust:{crust}</p>
        <p>Toppings:
          {
            toppingArray.map((item,index)=>(index > 0 && item  ? ","+item : item))
          }
        </p>
        <p>Cheese:{cheese}</p>
        <p>Sauce:{sauce}</p>
        <div>
          <button className="danger" onClick={()=>handleDelete(_id)}>Delete Pizza</button>
          <button className="success" onClick={()=>handleUpdate(_id)}>Update Pizza</button>
          <button className="success" onClick={()=>handleView(_id)}>View Pizza</button>

        </div>
        
    </div>
  )
}

export default PizzaCard