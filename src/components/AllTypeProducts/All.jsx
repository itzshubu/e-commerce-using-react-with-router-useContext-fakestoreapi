import React from "react";
import { DiVim } from "react-icons/di";
import  data3  from "../../store/productContext";
import Card from "./card"


const All = () => {
  // const [data, setData] = useState([]);
  
  let data = data3()

  return (
    <div className="flex justify-center flex-wrap gap-6 my-4">
      {data.map((item) => {
        return (
          <div
            className="w-[200px] border border-black p-4 cursor-pointer main-color"
            key={item.id}
          >
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default All;
