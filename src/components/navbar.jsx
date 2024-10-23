import React ,{useContext, useState} from 'react'
import {Link , NavLink} from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import {cartContext} from "../store/CartContext"


const navbar = () => {
  const{items , setItems} =  useContext(cartContext)
  console.log("rendered" , items)
  //  console.log(items)
  // const [amount , setAmount] = useState(9)
  const total= items.reduce((sum , item)=>{return sum + item.amount},0)
  console.log(total)
  return (
    <div className='flex flex-col sm:flex-row p-5 sm:font-bold main-color gap-5 sm:text-xl justify-between items-center'>
      <div>mywebpage.in</div>
      <ul className='flex gap-8'>
        <NavLink to="" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Home</NavLink>
        <NavLink to="about" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>About</NavLink>
        <NavLink to="products" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Products</NavLink>
        <NavLink to="contect" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Contect</NavLink>
      </ul>
      <div className='relative'> <NavLink to="cart" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}><IoCartOutline className='text-3xl cursor-pointer'/><p className='absolute top-[20%] bg-[red] w-6 h-6 rounded-full text-center left-[80%] translate-x-[-50%] translate-y-[-50%]'>{total}</p></NavLink></div>
    </div>
  )
}

export default navbar