"use client"
import React from 'react'



const BurgerIngredient = ({name, image, quantity}: {name: string, image: string, quantity: number}) => {
  
  return (
    <div>
        {Array.from({length : quantity}).map((_,i)=>(
          <img src={image} alt="image" key={i}/>
        ))}
    </div>
  )
}

export default BurgerIngredient