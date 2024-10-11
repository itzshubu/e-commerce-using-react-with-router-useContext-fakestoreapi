import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Services = () => {

  return (
    <div className="pt-4">
      <h1 className="text-center">Our Products</h1>
      <div>
        <ul className="flex gap-3 flex-wrap justify-center m-3">
        <NavLink to="All" className={({isActive})=>isActive?"border px-5 py-2 rounded-md bg-blue-500 text-black":"border border-blue-500 px-5 py-2 rounded-md  text-blue-500"}>All</NavLink>
          <NavLink to="electronics" className={({isActive})=>isActive?"border px-5 py-2 rounded-md bg-blue-500 text-black":"border border-blue-500 px-5 py-2 rounded-md  text-blue-500"}>Electronics</NavLink>
        <NavLink to="jewelery" className={({isActive})=>isActive?"border px-5 py-2 rounded-md bg-blue-500 text-black":"border border-blue-500 px-5 py-2 rounded-md  text-blue-500"}>jewelery</NavLink>
        <NavLink to="menscloth" className={({isActive})=>isActive?"border px-5 py-2 rounded-md bg-blue-500 text-black":"border border-blue-500 px-5 py-2 rounded-md  text-blue-500"}>menscloth</NavLink>
        <NavLink to="womenscloth" className={({isActive})=>isActive?"border px-5 py-2 rounded-md bg-blue-500 text-black":"border border-blue-500 px-5 py-2 rounded-md  text-blue-500"}>womenscloth</NavLink></ul>
      </div>
     <Outlet/>
    </div>
  );
};

export default Services;
