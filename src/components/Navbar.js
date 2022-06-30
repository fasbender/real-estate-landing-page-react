/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './style.css'

const Navbar = () => {

    const [ toggle, setToggle ] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const enableScroll = () => document.body.style.overflow = "auto"
    const disableScroll = () => document.body.style.overflow = "hidden"
    toggle ? disableScroll() : enableScroll()

  return (
    <header className='nav'>
        <div className='logo'>
            <img src={ process.env.PUBLIC_URL + './images/logo.png' } alt="logo" />
        </div>
        <div className={  toggle ? 'navbar active' : 'navbar' }>
            <nav className='nav-list'>
                <li><a onClick={ () => setToggle(false) } href="#">Home</a></li>
                <li><a onClick={ () => setToggle(false) }  href="#">Residence</a></li>
                <li><a onClick={ () => setToggle(false) }  href="#">About Us</a></li>
                <li><a onClick={ () => setToggle(false) }  href="#">Agents</a></li>
            </nav>
            <div className='sign-up'>
                <a onClick={ () => setToggle(false) } href="#">Sign Up</a>
            </div>
        </div>
        <div className={ toggle ? 'hamburger open' : 'hamburger' } onClick={handleToggle}>
            <div className='ham'></div>
        </div>
    </header>
  )
}

export default Navbar