import { NavLink } from "react-router-dom"

import "./NavBar.css"

function NavBar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">products</NavLink>
    </nav>
  )
}

export default NavBar