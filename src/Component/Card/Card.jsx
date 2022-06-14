import React from 'react'
import './Card.css'

function Card({emoji,heading,description}) {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{description}</span>
      <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Card
