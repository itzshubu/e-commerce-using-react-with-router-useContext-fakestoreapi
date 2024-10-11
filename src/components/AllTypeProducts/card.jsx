import { cartContext } from "../../store/CartContext";
import { useState, useContext } from "react";

const Card = (prop) => {
  let { item } = prop;
  const { items, setItems } = useContext(cartContext);
  const add = (item) => {
    let newcart = items.filter((cartitem) => {
      return cartitem.id == item.id;
    });
    let notidmathobject = items.filter((cartitem) => {
      return cartitem.id !== item.id;
    });
    console.log(newcart);
    if (0 < newcart.length) {
      var newcart2;
      newcart2 = newcart.map((item) => {
        var itemnew = { ...item, amount: item.amount + 1 };
        console.log(itemnew);
        return itemnew;
      });
      console.log(newcart2);
      console.log("if runs");
      setItems([...notidmathobject, ...newcart2]);
      console.log(items)
    } else {
      setItems([...items, { ...item, amount: 1 }]);
      console.log("else run");
      console.log(items)
    }

  };
  return (
    <>
      <img
        src={item.image}
        alt=""
        className="aspect-square object-contain object-top mix-blend-multiply"
      />
      <h4 className="pt-3 whitespace-nowrap overflow-ellipsis overflow-hidden ">
        {item.title}
      </h4>
      <p className="text-sm text-center font-bold">From : {item.price}$</p>
      <button
        className="px-3 py-2 border border-black w-32 my-2 m-auto block rounded-sm hover:bg-slate-300"
        onClick={() => add(item)}
      >
        add to cart
      </button>
    </>
  );
};

export default Card;
