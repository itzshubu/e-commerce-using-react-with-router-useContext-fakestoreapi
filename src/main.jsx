import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
// producs and roducts category
import Products from "./components/Products.jsx";
import Electronics from "./components/AllTypeProducts/electronics.jsx";
import Jewelery from "./components/AllTypeProducts/jewelery.jsx";
import Menscloth from "./components/AllTypeProducts/menscloth.jsx";
import Womenscloth from "./components/AllTypeProducts/womenscloth.jsx";
import All from "./components/AllTypeProducts/All.jsx";

import Contect from "./components/Contect.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/cart.jsx"
import { createBrowserRouter, RouterProvider ,Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products />,
       children: [
          { index: true, element: <Navigate to="all" replace /> }, // Redirect /products to /products/all
          { path: "all", element: <All /> },
          { path: "electronics", element: <Electronics /> },
          { path: "jewelery", element: <Jewelery /> },
          { path: "menscloth", element: <Menscloth /> },
          { path: "womenscloth", element: <Womenscloth /> },
        ],
       },
      { path: "contect", element: <Contect /> },
      { path: "cart", element: <Cart/> },
      { path: "product/:username", element: <Product /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
