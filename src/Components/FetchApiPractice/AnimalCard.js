import React from 'react'
import './AnimalCard.css'

function AnimalCard({...props}) {
  return (
    <div>
      <h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" />
    </div>
    <div className="flip-card-back">
      <h1>{props.name}</h1> 
      <p>{props.title}</p> 
      <p>{props.about}</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default AnimalCard
