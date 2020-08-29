import React from 'react'
import './resources/Landing.css'
import SocialLinks from './SocialLinks'

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='landing-image'>
        <img
          src='https://res.cloudinary.com/dtweazqf2/image/upload/h_4000,w_auto,f_auto,q_auto,g_auto,e_sharpen,c_fill/v1598539247/Original_FWLR_Landing_obgvba.jpg'
          alt='Producer Nick Fowler poses atop his Talon car'
        />
      </div>
      <div className='landing-logo'>
        <img src='https://res.cloudinary.com/dtweazqf2/image/upload/h_220,f_auto,q_auto,c_fit/v1598539128/Original_FWLR_Logo_htth7t.png' alt='Fowler logo' />
      </div>
      <SocialLinks />
    </div>
  )
}

export default Landing
