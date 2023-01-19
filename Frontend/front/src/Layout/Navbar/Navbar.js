import React from 'react'
import {NavLink} from "react-router-dom"
function Navbar() {
  return (
   <>
   <NavLink to={"/"}>Home</NavLink>
   <NavLink to={"/product"}>Product</NavLink>
   <NavLink to={"/add"}>AddPage</NavLink>
   </>
  )
}

export default Navbar
