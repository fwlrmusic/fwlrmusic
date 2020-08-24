import React, { useState } from 'react'
import './resources/Navbar.css'
import { CgMenuRightAlt } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuItems = (
    <ul>
      <li onClick={toggleMenu}>
        <Link to='/' title='Home page'>
            Home
        </Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to='/grand-prix' title='Grand Prix'>
            FWLR Grand Prix
        </Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to='/pit-crew' title='Pit Crew'>
            Pit Crew
        </Link>
      </li>
      <li onClick={toggleMenu}>
        <Link to='/contact' title='Contact'>
            Contact
        </Link>
      </li>
    </ul>
  )
  const burgerMenu = () => {
    return (
      <div className='burger-menu'>
        <Link to='/' onClick={closeMenu}>
          <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_40,f_auto,q_auto/v1598272317/fwlr_logo_e7lfmo.png' alt='Fowler logo' onClick={toggleMenu} />
        </Link>
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
