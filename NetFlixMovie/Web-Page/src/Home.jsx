import React from 'react'
import Series from './Series'
import Screen from './Screen'
import './home.css'

function Home() {
  return (
    <div className='d-flex flex-column  vh-100 '>

      <div className='w-100 h-100 '><Screen/></div>
      <div className='w-100 h-50'><Series/></div>
    </div>
  )
}

export default Home
