import React from 'react'

const Navbar = () => {
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
  const burgerMenu = (
    <div className='burger-menu'>
      {menuItems}
    </div>
  )
  const largeMenu = (
    <div className='large-menu'>
      {menuItems}
    </div>
  )
  return (
    <nav>
      {burgerMenu}
      {largeMenu}
    </nav>
  )
}

export default Navbar
