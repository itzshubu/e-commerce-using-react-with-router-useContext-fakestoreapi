import React from 'react'
import {  FaInstagramSquare ,FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='main-color flex justify-between p-3 px-5'>
      <div>@all rights reserved shubham.com</div>
      <div className='flex gap-4 text-xl'><FaInstagramSquare /> <FaSquareGithub /> <FaLinkedin /></div>
    </div>
  )
}

export default Footer