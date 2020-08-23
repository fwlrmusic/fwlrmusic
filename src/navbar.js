import React, { useState } from 'react'
import './resources/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = (
    <ul>
      <li>
        <a href='#'>
            Home
        </a>
      </li>
      <li>
        <a href='#'>
            FWLR Grand Prix
        </a>
      </li>
      <li>
        <a href='#'>
            Pit Crew
        </a>
      </li>
      <li>
        <a href='#'>
            Contact
        </a>
      </li>
    </ul>
  )
  const burgerMenu = () => {
    return (
      <div className='burger-menu'>
        {
          isMenuOpen && (
            menuItems
          )
        }
        <div className='burger-menu-click-container'>
          <div className='burger-menu-click' onClick={toggleMenu} />
        </div>
      </div>
    )
  }
  const largeMenu = (
    <div className='large-menu'>
      {menuItems}
    </div>
  )
  return (
    <nav>
      {burgerMenu()}
      {largeMenu}
    </nav>
  )
}

export default Navbar
