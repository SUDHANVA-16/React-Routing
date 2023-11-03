import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <Link to="/home">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/phone">Phone</Link>
    </div>
  )
}

export default NavBar