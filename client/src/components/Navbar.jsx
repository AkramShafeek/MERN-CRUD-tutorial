import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <h2 className='logo'>
          MERN-CRUD-APP
        </h2>
      </div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/create">create</NavLink>
        </li>
        <li>
          <NavLink to="/update">update</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar