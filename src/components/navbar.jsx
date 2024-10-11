import React from 'react'
import {Link , NavLink} from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";

const navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row p-5 sm:font-bold main-color gap-5 sm:text-xl justify-between items-center'>
      <div>mywebpage.in</div>
      <ul className='flex gap-8'>
        <NavLink to="" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Home</NavLink>
        <NavLink to="about" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>About</NavLink>
        <NavLink to="products" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Products</NavLink>
        <NavLink to="contect" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}>Contect</NavLink>
      </ul>
      <div> <NavLink to="cart" className={(e)=>e.isActive?"text-blue-800 hover:text-blue-800":""}><IoCartOutline className='text-3xl cursor-pointer'/></NavLink></div>
    </div>
  )
}

export default navbar