import React from 'react'
import './resources/LoadingSpinner.css'
import { VscLoading } from 'react-icons/vsc'

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-container'>
      <VscLoading
        size={60}
        color='#fff'
        className='loading-spinner'
      />
    </div>
  )
}

export default LoadingSpinner
