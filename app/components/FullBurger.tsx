"use client"
import React from 'react'
import BurgerIngredient from './BurgerIngredient'
import { Product } from '../types/Product'
import Down from './Burger/Ingredients/Down';
import Top from './Burger/Ingredients/Top';

interface MyBurgerProps{
  salad: Product;
  bacon: Product;
  cheese: Product;
  meat: Product
} 

const FullBurger : React.FC<MyBurgerProps> = ({salad, bacon, cheese, meat}) => {
  return (
    <div className='overflow-auto'>
        
        <div className=' flex flex-col justify-center items-center'>
             {/* <img src="/burger-top.png" alt="" /> */}
            <Top />
            {(salad.quantity == 0 && bacon.quantity==0 && cheese.quantity==0 && meat.quantity==0) ? <p className='text-4xl font-bold p-2 text-center'>Please Add ingredient</p> : 

            <div>
            <BurgerIngredient name="Salad" image="/salad.png" quantity={salad.quantity}/>
            <BurgerIngredient name="Bacon" image="/becon.png" quantity={bacon.quantity}/>
            <BurgerIngredient name="Cheese" image="/cheese.png" quantity={cheese.quantity}/>
            <BurgerIngredient name="Meat" image="/meat.png" quantity={meat.quantity}/>
          
            </div>
            }
        
          {/* <img src="/burger-down.png" alt="" /> */}
          <Down />
        </div>
         
    </div>
  )
}

export default FullBurger