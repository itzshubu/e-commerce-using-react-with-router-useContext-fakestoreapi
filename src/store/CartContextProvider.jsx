import React, { useState } from "react";
import { cartContext } from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState(
    ()=>{
      let data = JSON.parse(localStorage.getItem("cart"))
      return data
    }
  );
   localStorage.setItem("cart",JSON.stringify(items))
  return (
    <cartContext.Provider value={{ items, setItems }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
