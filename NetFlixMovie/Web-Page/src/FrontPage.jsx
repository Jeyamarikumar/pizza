import React from 'react'
import './Front.css'
import back from './assets/thibault-penin-GrzoKN1aqSg-unsplash.jpg'
import { useNavigate } from 'react-router-dom'

function FrontPage() {

  const navigate = useNavigate();

  return (
    <div className='Front'>
        <img src={back} alt="" />
       <div className='btn'>
        <button onClick={()=>{navigate('/screen/1')}}>Start</button>
       </div>
    </div>
  )
}

export default FrontPage
