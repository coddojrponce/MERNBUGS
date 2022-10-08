import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
        <div className="logo"></div>
        <h1>Pizza Factory</h1>
        <ul>
            <li>
                <Link to="/pizza/new">Create Pizza</Link>
            </li>
            <li>
                <Link to="/pizza">All Pizzas</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav