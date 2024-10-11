import React, { useEffect, useState } from "react";
import  data3  from "../../store/productContext";
import Card from "./card"

const jewelery = () => {
    // const [data, setData] = useState([]);
  // console.log(data3())
  let data = data3().filter((item)=>{
    return item.category == "jewelery"
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
export default jewelery