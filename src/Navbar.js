import React, { useState, useEffect } from 'react'
import './resources/Navbar.css'
import { CgMenuRightAlt } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      const menuItems = Array.from(document.getElementsByClassName('menu-item'))
      if (menuItems) {
        menuItems.forEach(menuItem => {
          menuItem.addEventListener('click', closeMenu)
        })
      }
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  const menuItems = (
    <ul>
      <li>
        <Link to='/' title='Home page' className='menu-item'>
            Home
        </Link>
      </li>
      <li>
        <Link to='/grand-prix' title='Grand Prix' className='menu-item'>
            FWLR Grand Prix
        </Link>
      </li>
      <li>
        <Link to='/pit-crew' title='Pit Crew' className='menu-item'>
            Pit Crew
        </Link>
      </li>
      <li>
        <Link to='/contact' title='Contact' className='menu-item'>
            Contact
        </Link>
      </li>
    </ul>
  )
  const burgerMenu = () => {
    return (
      <div className='burger-menu'>
        <Link to='/' onClick={closeMenu}>
          <img
            src='https://res.cloudinary.com/dtweazqf2/image/upload/h_40,f_auto,q_auto/v1598272317/fwlr_logo_e7lfmo.png'
            alt='Fowler logo'
            onClick={closeMenu}
          />
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
