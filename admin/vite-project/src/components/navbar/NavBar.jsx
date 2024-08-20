import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user-edit.png'


const NavBar = () => {
  return (
    <div className='navbar'>

    <img src={logo} alt=""/>

    <img src={user} alt=""/>

    </div>
  )
}

export default NavBar