import React from 'react'
import './resources/Landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-image'>
        {/* TODO: Update image once higher resolution is obtained */}
        <img
          src='https://res.cloudinary.com/dtweazqf2/image/upload/h_400,f_auto,q_auto/v1598215517/fwlr_landing_m8osmn.png'
          alt='Producer Nick Fowler poses atop his Talon car'
        />
      </div>
      <div className='landing-logo'>
        <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_100,f_auto,q_auto/v1598272317/fwlr_logo_e7lfmo.png' alt='Fowler logo' />
      </div>
    </div>
  )
}

export default Landing
