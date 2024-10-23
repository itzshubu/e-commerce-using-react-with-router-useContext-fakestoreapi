import { useEffect, useState, useContext } from "react";
import Headroom from 'react-headroom';
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { productContext } from "./store/productContext";
import CartContextProvider from "./store/CartContextProvider";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  console.log(useContext(productContext));
  useEffect(() => {
    (async () => {
      let response = await axios.get("https://fakestoreapi.com/products");
      let data = response.data;
      console.log(data);
      setData(data);
    })();
  }, []);

  return (
    <CartContextProvider>
    <productContext.Provider value={data}>
      <Headroom>
      <Navbar />
      </Headroom>
      <Outlet />
      <Footer />
    </productContext.Provider>
    </CartContextProvider>
  );
}

export default App;
