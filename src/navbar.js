import React, { useState } from 'react'
import './resources/Navbar.css'
import { CgMenuRightAlt } from 'react-icons/cg'

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
        <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_40,f_auto,q_auto/v1598272317/fwlr_logo_e7lfmo.png' alt='Fowler logo' />
        {
          isMenuOpen && (
            menuItems
          )
        }
        <div className='burger-menu-click' onClick={toggleMenu}>
          <CgMenuRightAlt size={50} color='#fff' />
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
