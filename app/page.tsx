"use client"
import { url } from "inspector";
import { Url } from "next/dist/shared/lib/router/router";
import { useState } from "react";
import BurgerIngredient from "./components/BurgerIngredient";
import { Product } from "./types/Product";
import FullBurger from "./components/FullBurger";
import Navbar from "./components/Navbar";
import BurgerModal from "./components/BurgerModal";


export default function Home() {
  const [price, setPrice] = useState(4.00)
  const [salad, setSalad] = useState<Product>({name: "Salad", quantity: 0, productPrice: 0.5, image: "/salad.png" })
  const [bacon, setBacon] = useState<Product>({name: "Bacon", quantity: 0, productPrice: 0.5, image: "/becon.png"})
  const [cheese, setCheese] = useState<Product>({name: "Cheese", quantity: 0, productPrice: 0.5, image: "/cheese.png"})
  const [meat, setMeat] = useState<Product>({name: "Meat", quantity: 0, productPrice: 0.5, image: "/meat.png"})

  const [showModal, setShowModal] =useState(false)


  function addItem(item: string){
      switch (item) {
        case "Salad":
          setSalad({...salad, quantity : salad.quantity+1});
          setPrice(price+salad.productPrice)
          break;

        case "Bacon":
          setBacon({...bacon, quantity: bacon.quantity+1});
          setPrice(price+bacon.productPrice)
          break;

        case "Cheese":
          setCheese({...cheese, quantity: cheese.quantity+1});
          setPrice(price+cheese.productPrice)
          break;

        case "Meat":
          setMeat({...meat, quantity: meat.quantity+1});
          setPrice(price+meat.productPrice)
          break;

         default:
          setPrice(price) 
      }
        
  }


  function removeItem(item : string){

    switch (item){
      case "Salad":
        setSalad({...salad, quantity: salad.quantity >=1 ? salad.quantity-1 : 0})
        setPrice( (salad.quantity>=1 && price > 4) ? price-0.5 : price)
        break;

      case "Bacon":
        setBacon({...bacon, quantity: bacon.quantity >=1 ? bacon.quantity-1 : 0})
        setPrice((bacon.quantity>=1 && price > 4) ? price-0.5 : price) 
        break; 

      case "Cheese":
        setCheese({...cheese, quantity: cheese.quantity >=1 ? cheese.quantity-1 : 0})
        setPrice((cheese.quantity>=1 && price > 4) ? price-0.5 : price)
        break;

      case "Meat":
        setMeat({...meat, quantity: meat.quantity >=1 ? meat.quantity-1 : 0})
        setPrice((meat.quantity>=1 && price > 4) ? price-0.5 : price)
        break;
      
      default:
        setPrice(price)
    }
  }




  return (
   <div className=" flex min-h-screen items-center justify-between flex-col">

      {/* <Navbar /> */}
      <div className="w-full h-110 overflow-auto pt-3">
          <FullBurger salad ={salad} bacon={bacon} cheese={cheese} meat={meat}/>
      </div>

     
      <div className=" flex flex-col justify-center items-center bg-amber-600 text-center w-full py-10" >
          <p className=" text-3xl font-bold p-3">Current price: {price}</p>

          <div className="flex place-content-between items-center my-5 mx-0 gap-2">
            <h3 className=" font-bold p-2">Salad</h3>
            <div className="flex justify-center items-center gap-5">
                <button onClick={()=>removeItem("Salad")} className="h-10 w-25 rounded-2xl bg-amber-50">Less</button>
                <button onClick={()=>addItem("Salad")} className="h-10 w-25 rounded-2xl bg-amber-50">More</button>
            </div>          
          </div>

            
          <div className="flex place-content-between items-center my-5 mx-0 gap-2">
            <h3 className="font-bold p-2">Bacon</h3>
            <div className="flex  justify-center items-center gap-5">
                <button onClick={()=>removeItem("Bacon")} className="h-10 w-25 rounded-2xl bg-amber-50">Less</button>
                <button onClick={()=>addItem("Bacon")} className="h-10 w-25 rounded-2xl bg-amber-50">More</button>
            </div>          
          </div>

          <div className="flex place-content-between items-center my-5 mx-0 gap-2">
              <h3 className="font-bold p-2">Cheese</h3>
              <div className="flex justify-center items-center gap-5">
                  <button onClick={()=>removeItem("Cheese")} className="h-10 w-25 rounded-2xl bg-amber-50">Less</button>
                  <button onClick={()=>addItem("Cheese")} className="h-10 w-25 rounded-2xl bg-amber-50">More</button>
              </div>          
          </div>

            <div className="flex place-content-between items-center my-5 mx-0 gap-2">
                <h3 className="font-bold p-2">Meat</h3>
                <div className="flex justify-center items-center gap-5">
                    <button onClick={()=>removeItem("Meat")} className="h-10 w-25 rounded-2xl bg-amber-50">Less</button>
                    <button onClick={()=>addItem("Meat")} className="h-10 w-25 rounded-2xl bg-amber-50">More</button>
                </div>        
            </div>

            <BurgerModal />

      </div>
   </div>
  );
}
