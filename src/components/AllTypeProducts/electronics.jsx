import React, { useEffect, useState ,useContext } from "react";
import { productContext}  from '../../store/productContext'
import Card from "./card"

const electronics = () => {
  let all = useContext(productContext)
 let data = all.filter((item)=>{
  return item.category == "electronics"
 })
  
  return (
    <div className="flex justify-center flex-wrap gap-6 my-4">
      {data.map((item) => {
        return (
          <div
            className="w-[200px] border border-black p-4 cursor-pointer"
            key={item.id}
          >
            <Card item={item} />
          </div>
        );
      })}
    </div>
  )
}
export default electronics