import React from 'react'
import './resources/Landing.css'

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-image'>
        <img
          src='https://res.cloudinary.com/dtweazqf2/image/upload/h_400,w_auto,f_auto,q_auto,c_fill/v1598215517/fwlr_landing_m8osmn.png'
          alt='Producer Nick Fowler poses atop his Talon car'
        />
      </div>
      <div className='landing-logo'>
        <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_100,f_auto,q_auto,c_fit/v1598272317/fwlr_logo_e7lfmo.png' alt='Fowler logo' />
      </div>
    </div>
  )
}

export default Landing
