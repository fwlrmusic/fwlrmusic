import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Navbar from './navbar'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <div className='page-content'>
        <div className='landing-container'>
          <h1>Landing Page</h1>
          <div className='landing-image'>
            <img
              src='https://res.cloudinary.com/dtweazqf2/image/upload/v1598215517/fwlr_landing_m8osmn.png'
              alt='Producer Nick Fowler poses atop his Talon car'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
