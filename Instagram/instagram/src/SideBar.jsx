import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SideBar() {

const navigate = useNavigate();


  return (
    <div className='m-3 position-fixed'>    
    <div className='d-flex flex-column gap-4 fs-5 mx-2'>
      <img className='logo' src="/src/assets/instaText1.png" alt="" />
      <div><i className="bi bi-house-door"></i>Home</div>
      <div><i className="bi bi-search"></i>Search</div>
      <div><i className="bi bi-compass"></i>Explore</div>
      <div><i className="bi bi-play-circle"></i>Reels</div>
      <div><i className="bi bi-chat-dots"></i>Messages</div>
      <div><i className="bi bi-heart"></i>Notifications</div>
      <div><i className="bi bi-plus-square"></i>Create</div>
      <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='position-fixed bottom-0 mb-3 d-flex flex-column gap-4 fs-5 '>
      <div><i className="bi bi-threads"></i>Threads</div>
      <div><i className="bi bi-list"></i>More</div>

    </div>
    </div>

  )
}

export default SideBar
