import React, { useState, useEffect, useRef } from 'react'
import './resources/Navbar.css'
import { CgMenuRightAlt } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const grandPrixRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGrandPrixOpen, setIsGrandPrixOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      const menuItems = Array.from(document.getElementsByClassName('menu-item'))
      const subMenuItems = Array.from(document.getElementsByClassName('sub-menu-item'))
      if (menuItems && subMenuItems) {
        menuItems.forEach(menuItem => {
          menuItem.addEventListener('click', closeMenu)
        })
        subMenuItems.forEach(subMenuItem => {
          subMenuItem.addEventListener('click', closeMenu)
        })
      }
    }
  })

  useEffect(() => {
    const grandPrix = grandPrixRef.current
    if (isGrandPrixOpen) {
      grandPrix.style.height = '182px'
    } else {
      grandPrix.style.height = '60px'
    }
  }, [isGrandPrixOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleGrandPrix = () => {
    setIsGrandPrixOpen(!isGrandPrixOpen)
  }

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      setIsGrandPrixOpen(false)
    }
  }

  const menuItems = (
    <ul className='menu-items'>
      <li className='menu-item'>
        <Link to={process.env.PUBLIC_URL + '/'} title='Home page' className='menu-item-link'>
          Home
        </Link>
      </li>
      <div ref={grandPrixRef} className='sub-menu' onClick={toggleGrandPrix}>
        <span>
          FWLR Grand Prix
        </span>
        {
          isGrandPrixOpen && (
            <ul className='sub-menu-items'>
              <li className='sub-menu-item'>
                <Link to={process.env.PUBLIC_URL + '/races-and-winners'} title='Races and winners' className='menu-item-link'>
                  Races & Winners
                </Link>
              </li>
              <li className='sub-menu-item'>
                <Link to={process.env.PUBLIC_URL + '/how-to-race'} title='How to race' className='menu-item-link'>
                  How to Race
                </Link>
              </li>
            </ul>
          )
        }
      </div>
      {/* TODO: Include in later release */}
      {/* <li className='menu-item'>
        <Link to='/pit-crew' title='Pit Crew' className='menu-item-link'>
          Pit Crew
        </Link>
      </li> */}
      <li className='menu-item'>
        <Link to={process.env.PUBLIC_URL + '/contact'} title='Contact' className='menu-item-link'>
          Contact
        </Link>
      </li>
    </ul>
  )
  const burgerMenu = () => {
    return (
      <div className='burger-menu'>
        <Link to={process.env.PUBLIC_URL + '/'} onClick={closeMenu}>
          <img
            src='https://res.cloudinary.com/dtweazqf2/image/upload/h_40,f_auto,q_auto/v1598272317/Original_FWLR_Logo_htth7t.png'
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
