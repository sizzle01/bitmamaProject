import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src="" width="50" height="50" className="mr-3 avatar" alt="user" />
        <h3 style={{ color: 'white' }}>username</h3>
        <img src="../../../public/logo.png" alt="" />
        <a className="ml-auto d-flex align-items-center" href="/">
          Search Other User
        </a>
      </nav>
    </div>
  )
}

export default Navbar
