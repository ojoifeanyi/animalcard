import React from 'react'
import './Card.css'
import Employees from './Employees.json'
function Card() {
  return (
    <div className='wrap'>
        {
        Employees.map(Employees => (
        <>
         <div className='card'>
        <h1>{Employees.id}</h1>
        <p className='price'>{Employees.name}</p>
        <p>{Employees.country}</p>
        <p><button>Read More</button></p>
        </div>
        </>
        )) 
}
</div>
  )
}

export default Card
