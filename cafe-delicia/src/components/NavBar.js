import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return(
        <div className="navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/menu'>Menu</NavLink>
            <NavLink to='/shop'>Shop Our Beans</NavLink>
        </div> 
    )
}

export default NavBar;