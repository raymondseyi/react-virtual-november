import React from 'react'
import {Link} from "react-router-dom"
const NavBarB = () => {
  return (
    <>  
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </>
  )
}

export default NavBarB