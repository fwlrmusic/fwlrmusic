import React from 'react'
import ReactDOM from 'react-dom'
import './resources/App.css'
import Navbar from './navbar'
import Landing from './landing'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <div className='page-content'>
        {/* React Router */}
        <Landing />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
