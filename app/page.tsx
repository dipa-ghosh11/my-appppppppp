
"use client"
import Image from "next/image";
import { useState } from "react";

type Product={
  id?: string
  name: string
  quantity: number
  price: number
}

export default function Home() {
  const [price, setPrice]=useState(4.00);
  const [salad, setSalad]=useState<Product>({name:"Salad", quantity: 0, price: 0.5})
  const [bacon, setBacon]=useState<Product>({name:"Bacon", quantity: 0, price: 0.5})
  const [cheese, setCheese]=useState<Product>({name:"Cheese", quantity: 0, price: 0.5})
  const [meat, setMeat]=useState<Product>({name:"Meat", quantity: 0, price: 0.5})


function addItem(item:string){
  switch (item)
  {
    case "Salad":
      setSalad({...salad,quantity: salad.quantity+1});
      setPrice(price + salad.price)
      break;
    case "Bacon":
      setBacon({...bacon,quantity: bacon.quantity+1});
      setPrice(price + bacon.price)
      break;
    case "Cheese":
      setCheese({...cheese,quantity: cheese.quantity+1});
      setPrice(price + cheese.price)
      break;
    case "Meat":
      setMeat({...meat,quantity: meat.quantity+1});
      setPrice(price + meat.price)
      break;
    default:
      setPrice(4.00);
  }
  
}

function lessItem(item:string){
  switch (item)
  {
    case "Salad":
      setSalad({...salad,quantity: salad.quantity-1});
      setPrice(price > 4.00 ? price - salad.price : 4.00);
      break;
    case "Bacon":
      setSalad({...bacon,quantity: bacon.quantity-1});
      setPrice(price > 4.00 ? price - bacon.price : 4.00);
      break;
    case "Cheese":
      setCheese({...cheese,quantity: cheese.quantity-1});
      setPrice(price > 4.00 ? price - cheese.price : 4.00);
      break;
    case "Meat":
      setMeat({...meat,quantity: meat.quantity-1});
      setPrice(price > 4.00 ? price - meat.price : 4.00);
      break;
    default:
      setPrice(4.00);
  }

}

  return (
    <div>
      <div>{price}</div>
      <button onClick={() => addItem("Salad")}>+</button>
      <button onClick={() => lessItem("Salad")}>-</button>
    </div>
  );
}
